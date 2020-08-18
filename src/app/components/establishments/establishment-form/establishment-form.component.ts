import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Establishment } from '../establishment.model';
import { EstablishmentService } from '../establishment.service';

@Component({
  selector: 'app-establishment-form',
  templateUrl: './establishment-form.component.html',
  styleUrls: ['./establishment-form.component.css']
})
export class EstablishmentFormComponent implements OnInit {
  establishment: Establishment;

  establishmentForm: FormGroup = this.$formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
    picture: [''],
    latitude: [''],
    longitude: [''],
    registered: [''],
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private establishmentService: EstablishmentService,
    protected $formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.establishmentForm.get('registered').disable();
    this.activatedRoute.params.subscribe(params => {
        const id = params.id;
        this.getById(id);
    });
  }

  getById(id): void {
    this.establishmentService.readById(id).subscribe((establishment) => {
      if (establishment !== undefined) {
        this.establishment = establishment;
        this.establishmentForm.patchValue({
          name: establishment.name,
          email: establishment.email,
          phone: establishment.phone,
          address: establishment.address,
          picture: establishment.picture,
          latitude: establishment.latitude,
          longitude: establishment.longitude,
          registered: establishment.registered
        });
      }
    });
  }

  submit(): void {
    try {
      if (this.establishmentForm.invalid) {
        throw new Error('Complete the form!');
      }
      const entity = this.establishmentForm.getRawValue();
      if ( this.establishment.id) {
        entity.id =  this.establishment.id;
        const retorno = this.establishmentService.update(entity);
        if (retorno.id) {
          this.establishment = retorno;
          this.establishmentService.showMessage('Successfully changed!', false);
          this.router.navigateByUrl('/establishments');
        }
      }
    } catch (err) {
      this.establishmentService.errorHandler(err);
    }
  }

  back(): void {
    this.router.navigateByUrl('/establishments');
  }
}

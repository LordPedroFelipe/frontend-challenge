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
    registered: [''],
  });

  constructor(
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
          registered: establishment.registered
        });
      }
    });
  }

  submit(): void {
    console.log('params');
  }

}

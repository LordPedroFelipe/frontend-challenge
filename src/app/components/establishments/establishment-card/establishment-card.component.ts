import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Establishment } from '../establishment.model';

@Component({
  selector: 'app-establishment-card',
  templateUrl: './establishment-card.component.html',
  styleUrls: ['./establishment-card.component.css']
})
export class EstablishmentCardComponent implements OnInit {

  @Input() establishment: Establishment;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.establishment);
  }

  openForm(): void {
    this.router.navigate(['/establishment/update/' + this.establishment.id ]);
  }
}

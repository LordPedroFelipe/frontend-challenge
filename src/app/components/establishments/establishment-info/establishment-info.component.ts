import { Component, OnInit, Input } from '@angular/core';
import { Establishment } from '../establishment.model';

@Component({
  selector: 'app-establishment-info',
  templateUrl: './establishment-info.component.html',
  styleUrls: ['./establishment-info.component.css']
})
export class EstablishmentInfoComponent implements OnInit {
  @Input() establishment: Establishment;

  constructor() { }

  ngOnInit(): void {
  }

}

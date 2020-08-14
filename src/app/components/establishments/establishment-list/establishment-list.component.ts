import { Component, OnInit, ViewChild } from '@angular/core';
import { Establishment } from '../establishment.model';
import { MatAccordion } from '@angular/material/expansion';
import { EstablishmentService } from '../establishment.service';

@Component({
  selector: 'app-establishment-list',
  templateUrl: './establishment-list.component.html',
  styleUrls: ['./establishment-list.component.css']
})
export class EstablishmentListComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  establishments: Establishment[];

  constructor(
    private establishmentService: EstablishmentService
  ) { }

  ngOnInit(): void {
    this.establishmentService.read().subscribe(establishments => {
      this.establishments = establishments;
    });
  }

}

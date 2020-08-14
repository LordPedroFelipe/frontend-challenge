import { Component, OnInit } from '@angular/core';
import { Establishment } from '../establishment.model';
import { EstablishmentService } from '../establishment.service';

@Component({
  selector: 'app-establishments-grid',
  templateUrl: './establishments-grid.component.html',
  styleUrls: ['./establishments-grid.component.css']
})
export class EstablishmentsGridComponent implements OnInit {

  establishments: Establishment[];
  displayedColumns = ['id', 'name', 'email', 'action'];

  constructor(
    private establishmentService: EstablishmentService
  ) { }

  ngOnInit(): void {
    this.establishmentService.read().subscribe(establishments => {
      this.establishments = establishments;
    });
  }

}

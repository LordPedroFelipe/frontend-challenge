import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.css']
})
export class EstablishmentComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) {
    headerService.setHeaderData = {
      title: 'Establishment',
      icon: 'home',
      routeUrl: '/establishment'
    };
  }

  ngOnInit(): void {
  }

}

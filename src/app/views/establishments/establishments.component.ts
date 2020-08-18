import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-establishments',
  templateUrl: './establishments.component.html',
  styleUrls: ['./establishments.component.css']
})
export class EstablishmentsComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) {
    headerService.setHeaderData = {
      title: 'Establishments',
      icon: 'storefront',
      routeUrl: '/establishments'
    };
  }

  ngOnInit(): void {
  }

}

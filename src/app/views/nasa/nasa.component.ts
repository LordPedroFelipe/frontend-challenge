import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) {
    headerService.setHeaderData = {
      title: 'Nasa - Astronomy Picture of the Day',
      icon: 'airplanemode_active',
      routeUrl: '/nasa'
    };
  }

  ngOnInit(): void {
  }

}

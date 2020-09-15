import { Component, OnInit } from '@angular/core';
import { NasaApodService } from '../nasa-apod.service';
import { NasaApod } from '../nasa-apod.model';

@Component({
  selector: 'app-nasa-day',
  templateUrl: './nasa-day.component.html',
  styleUrls: ['./nasa-day.component.css']
})
export class NasaDayComponent implements OnInit {

  nasaApod: NasaApod;

  constructor(
    private nasaApodService: NasaApodService
  ) { }

  ngOnInit(): void {
    this.getNasaApodDay();
  }

  getNasaApodDay(): void {
    this.nasaApodService.read().subscribe(retorno => {
      console.log(retorno);
      this.nasaApod = retorno;
    });
  }
}

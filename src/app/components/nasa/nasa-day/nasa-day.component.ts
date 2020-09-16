import { Component, OnInit } from '@angular/core';
import { NasaApodService } from '../nasa-apod.service';
import { NasaApod } from '../nasa-apod.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nasa-day',
  templateUrl: './nasa-day.component.html',
  styleUrls: ['./nasa-day.component.css']
})
export class NasaDayComponent implements OnInit {

  nasaApod: NasaApod;
  date = new FormControl(new Date());

  constructor(
    private nasaApodService: NasaApodService
  ) { }

  ngOnInit(): void {
    this.getNasaApodDay(null);
  }

  getNasaApodDay(date): void {
    if (date === null) {
      this.nasaApodService.read().subscribe(retorno => {
        console.log(retorno);
        this.nasaApod = retorno;
      });
    } else {
      this.nasaApodService.readByDate(date).subscribe(retorno => {
        console.log(retorno);
        this.nasaApod = retorno;
      });
    }
  }

  changeDate(event): void {
    const date = event.value;
    const formattedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    this.getNasaApodDay(formattedDate);
  }
}

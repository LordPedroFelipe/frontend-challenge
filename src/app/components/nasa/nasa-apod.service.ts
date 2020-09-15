import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { NasaApod } from './nasa-apod.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NasaApodService {
  baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=LkvBiyBfG6sED7l3io8t6DgDT2BB9ldFxSdyD5fe';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  read(): Observable<NasaApod> {
    return this.http.get<NasaApod>(this.baseUrl).pipe(
      map((nasaApod) => {

        return nasaApod;
      }),
      catchError((e) => this.errorHandler(e))
    );
  }

  readByDate(date): Observable<NasaApod> {
    console.log(date);
    const filterDate = '&date=' + date;
    return this.http.get<NasaApod>(this.baseUrl + filterDate).pipe(
      map((nasaApod) => {

        return nasaApod;
      }),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(msg: any): Observable<any> {
    this.showMessage(msg, true);
    return EMPTY;
  }
}

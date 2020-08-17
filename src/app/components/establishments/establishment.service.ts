import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Establishment } from './establishment.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EstablishmentService {
  baseUrl = 'https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  read(): Observable<Establishment[]> {
    return this.http.get<Establishment[]>(this.baseUrl).pipe(
      map((obj) => {
        obj.map((e, index) => {
          const storedEstablishment = JSON.parse(localStorage.getItem(e.id));
          if (storedEstablishment) {
            obj[index].name = storedEstablishment.name;
            obj[index].email = storedEstablishment.email;
            obj[index].phone = storedEstablishment.phone;
            obj[index].address = storedEstablishment.address;
          }
        });
        return obj;
      }),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Establishment> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Establishment>(url).pipe(
      map((obj) => {
        const storedEstablishment = JSON.parse(localStorage.getItem(obj.id));
        if (storedEstablishment) {
          return storedEstablishment;
        } else {
          return obj;
        }
      }),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(establishment: Establishment): Establishment {
    localStorage.setItem(establishment.id, JSON.stringify(establishment));

    return establishment;
  }

  errorHandler(msg: any): Observable<any> {
    this.showMessage(msg, true);
    return EMPTY;
  }
}

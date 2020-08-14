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

  create(establishment: Establishment): Observable<Establishment> {
    return this.http.post<Establishment>(this.baseUrl, establishment).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Establishment[]> {
    return this.http.get<Establishment[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Establishment> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Establishment>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(establishment: Establishment): Observable<Establishment> {
    const url = `${this.baseUrl}/${establishment.id}`;
    return this.http.put<Establishment>(url, establishment).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Establishment> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Establishment>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}

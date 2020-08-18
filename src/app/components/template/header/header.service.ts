import { HeaderData } from './header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private headerData = new BehaviorSubject<HeaderData>({
    title: 'Home',
    icon: 'home',
    routeUrl: ''
  });

  constructor() { }

  get getHeaderData(): HeaderData {
    return this.headerData.value;
  }

  set setHeaderData(headerData: HeaderData) {
    this.headerData.next(headerData);
  }
}

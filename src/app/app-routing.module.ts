import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { EstablishmentsComponent } from './views/establishments/establishments.component';
import { EstablishmentComponent } from './views/establishment/establishment.component';
import { NasaComponent } from './views/nasa/nasa.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'establishments',
    component: EstablishmentsComponent
  },
  {
    path: 'establishment/update/:id',
    component: EstablishmentComponent
  },
  {
    path: 'nasa',
    component: NasaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

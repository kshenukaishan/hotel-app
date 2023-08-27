import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { ReservationComponent } from './components/reservation/reservation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ReservationListComponent },
  { path: 'new', component: ReservationComponent },
  { path: 'edit/:id', component: ReservationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

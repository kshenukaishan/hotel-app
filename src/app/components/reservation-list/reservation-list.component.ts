import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css'],
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationServaice: ReservationService) {}

  ngOnInit(): void {
    this.reservationServaice.getReservations().subscribe((reservations) => {
      this.reservations = reservations;
    });
  }

  deleteReservation(id: string) {
    this.reservationServaice
      .deleteReservation(id)
      .subscribe(() => console.log('delete requested'));
  }
}

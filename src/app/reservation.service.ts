import { Injectable } from '@angular/core';
import { Reservation } from './models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl = 'http://localhost:3000';
  private reservations: Reservation[] = [];

  constructor(private http: HttpClient) {}

  //CRUD OPERAIONS

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/reservations`);
  }

  getReservation(id: String): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/reservation/${id}`);
  }

  addReservation(reservation: Reservation): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/reservation/`, reservation);
  }

  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/reservation/${id}`);
  }

  updateReservation(
    id: string,
    updatedReservation: Reservation
  ): Observable<void> {
    return this.http.post<void>(
      `${this.apiUrl}/reservation/${id}`,
      updatedReservation
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  reservationForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.reservationService.getReservation(id).subscribe((reservation) => {
        if (reservation) this.reservationForm.patchValue(reservation);
      });
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;
      //newly pasted logic for get single instance
      let id = this.activatedRoute.snapshot.paramMap.get('id');

      if (id) {
        //update
        this.reservationService
          .updateReservation(id, reservation)
          .subscribe(() => {
            console.log('Update request proccesed');
          });
      } else {
        this.reservationService.addReservation(reservation).subscribe(() => {
          console.log('Update request processed');
        });
      }

      this.router.navigate(['/list']);
    }
  }
}

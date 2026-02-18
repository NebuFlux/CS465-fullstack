import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css',
})
export class TripCard implements OnInit {

  @Input("trip") trip: any;

  constructor(
    private router: Router,
    private authenticationService: Authentication
  ) {}

  public isLoggedIn(){
    return this.authenticationService.isLoggedIn();
  }

  ngOnInit(): void {
  }

  public editTrip(trip: Trip){
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }
}

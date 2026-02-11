import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  imports: [CommonModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css',
})


export class EditTrip implements OnInit {
  public editForm!: FormGroup;
  trip!: Trip;
  submitted = false;
  message : string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripData: TripData
  ) {}

  ngOnInit(): void {
    // Retrieve stashed trip ID
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;      
    }

    console.log('EditTripComponent::ngOnInit');
    console.log('tripcode: ' + tripCode);

    this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    })

    this.tripData.getTrip(tripCode)
      .subscribe({
        next: (value: any) => {
          this.trip = value[0];
          
          if(!this.trip){
            this.message = 'No Trip Retrieved!';
          } else {
            this.message = 'trip: ' + tripCode + ' retrieved';
          }
          console.log(this.message);

          this.trip.start = value[0].start.split('T')[0];
          // Populate our record into the form
          this.editForm.patchValue(value[0]);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }

  public onSubmit(){
    this.submitted = true;

    if(this.editForm.valid){
      this.tripData.updateTrip(this.editForm.value)
        .subscribe({
          next: (value: any) => {
            console.log(value);
            this.router.navigate(['']);
          },
          error: (error: any) => {
            console.log('Error: ' + error);
          }
        })
    }
  }

  // get the form short name to access the form fields
  get f() {return this.editForm.controls;}
}

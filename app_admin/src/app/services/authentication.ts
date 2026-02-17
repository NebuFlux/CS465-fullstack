import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { TripData } from './trip-data';

@Injectable({
  providedIn: 'root',
})
export class Authentication {
  constructor (
    @Inject (BROWSER_STORAGE) private storage: Storage,
    private tripData: TripData
  ) {}

  // Variable to handle Auth Response
  authResp: AuthResponse = new AuthResponse();

  // Get token from our Storage provider.
  // NOTE: key name for Token is 'travlr-token'
  public getToken(): string {
    let out: any;
    out = this.storage.getItem('travlr-token');

    // return string even if no token is found
    if (!out){
      return '';
    }
    return out;
  }

  // Save token in Storage provider
  // NOTE: key name for Token is 'travlr-token'
  public saveToken(token: string): void {
    this.storage.setItem('travlr-token', token);
  }

  // Logout & remove JWT from storage
  public logout(): void{
    this.storage.removeItem('travlr-token');
  }

  // Boolean to determine if user is logged in and token is valid.
  // will need to reauthenticate if token expires.
  public isLoggedIn(): boolean {
    const token: string = this.getToken();
    if(token){
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }

  // Retrieve current user.
  // Only called after isLoggedIn() returns true.
  public getCurrentUser(): User {
    const token: string = this.getToken();
    const { email, name } = JSON.parse(atob(token.split('.')[1]));
    return { email, name } as User;
  }

  // Login method leveraging login method in tripData service
  // TripData method returns an observable, we subscribe to result
  // only process when the Observable condition is satisfied
  public login(user: User, passwd: string) : void {
    this.tripData.login(user,passwd)
      .subscribe({
        next: (value: any) => {
          if(value){
            console.log(value);
            this.authResp = value;
            this.saveToken(this.authResp.token);
          }
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }

  // Register method leveraging register method in tripData service
  // NOTE: nearly identical to login method, API logs a new user in
  // immediately upon registration
  public register(user: User, passwd: string) : void {
    this.tripData.register(user, passwd)
      .subscribe({
        next: (value: any) => {
          if(value){
            console.log(value);
            this.authResp = value;
            this.saveToken(this.authResp.token);
          }
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }
}

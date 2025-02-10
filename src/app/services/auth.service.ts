import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticationSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticationSubject.asObservable(); // Observable for real-time updates

  private isAuthenticated: boolean = false;

  constructor() { }

  login(username: string, password: string): boolean {
    alert('Hi')
    if (username == "admin" && password == "admin") {
      this.isAuthenticated = true;
      localStorage.setItem("username", username);
      this.isAuthenticationSubject.next(true);  // Notify to the Subscribers
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem("username");
    this.isAuthenticationSubject.next(false);  // Notify to the Subscribers
  }

  isLoggedIn(): boolean {
    // return this.isAuthenticated;
    if (localStorage.getItem("username")) {
      this.isAuthenticationSubject.next(true);  // Notify to the Subscribers
      return true;
    }
    return false;
  }

}

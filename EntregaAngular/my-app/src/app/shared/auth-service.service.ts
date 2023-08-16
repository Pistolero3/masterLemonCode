import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

interface User {
  userName: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogged: boolean = false;
  private storageKey: string = 'loggedInUser';
  user: User = {
    userName: '',
    password: '',
  };

  constructor(private router: Router) {
    const storedUser = localStorage.getItem(this.storageKey);
    this.isLogged = !!storedUser;
    if (this.isLogged) {
      this.user.userName = storedUser || '';
    }
  }

  getIsLogged() {
    return this.isLogged;
  }

  login({
    userName,
    password,
  }: {
    userName: string;
    password: string;
  }): Observable<boolean> {
    if (userName === 'Master' && password === 'ocarina') {
      return of(true).pipe(
        delay(4000),
        tap(() => {
          this.isLogged = true;
          this.user.userName = userName;
          localStorage.setItem(this.storageKey, this.user.userName);
          this.router.navigate(['home']);
        })
      );
    } else {
      return of(false).pipe(
        delay(4000),
        tap(() => alert('Login failed: username: Master and password: ocarina'))
      );
    }
  }

  logout(): void {
    this.isLogged = false;
    this.user.userName = '';
    localStorage.removeItem(this.storageKey);
  }

  getUserName(): string {
    return this.user.userName;
  }

  updateUserName(updatedUser: User) {
    this.user.userName = updatedUser.userName;
  }
}

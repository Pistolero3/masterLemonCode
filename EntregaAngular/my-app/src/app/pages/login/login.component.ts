import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth-service.service';
import { Subscription } from 'rxjs';

interface User {
  userName: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loading: boolean = false;
  loginSubscription: Subscription | undefined;
  user: User = {
    userName: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.loading = true;
    this.loginSubscription = this.authService
      .login({ userName: this.user.userName, password: this.user.password })
      .subscribe({
        next: (success) => {
          if (success) {
            this.authService.updateUserName(this.user);
            console.log('Login success');
          } else {
            console.log('Login failed');
          }
        },
        error: (error) => {
          error.error.message === 'User not found';
        },
        complete: () => {
          this.loading = false;
        },
      });
  }

  ngOnDestroy() {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}

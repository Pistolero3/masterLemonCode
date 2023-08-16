import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss'],
})
export class PrivateHeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}
  user: string = this.authService.getUserName();

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}

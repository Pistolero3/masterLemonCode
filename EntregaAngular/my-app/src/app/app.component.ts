import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth-service.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isRootUrl = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isRootUrl =
          this.router.url === '/' || this.router.url === '/index.html';
      });
  }

  get isLogged() {
    return this.authService.getIsLogged();
  }
}

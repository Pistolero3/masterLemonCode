import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinkButtonComponent } from './utils/link-button/link-button.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LoginComponent } from './pages/login/login.component';
import { PublicheaderComponent } from './layout/publicheader/publicheader.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PrivateHeaderComponent } from './layout/private-header/private-header.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RotateDirective } from './directives/rotate.directive';

@NgModule({
  declarations: [
    AppComponent,
    LinkButtonComponent,
    HomeComponent,
    AboutUsComponent,
    LoginComponent,
    PublicheaderComponent,
    FooterComponent,
    PrivateHeaderComponent,
    GalleryComponent,
    ProfileComponent,
    RotateDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

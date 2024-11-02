import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
  { "path": "", component: LandingComponent },
  { "path": "login", component: LoginComponent },
  { "path": "signup", component: SignupComponent }
];

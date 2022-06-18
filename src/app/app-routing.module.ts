import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './AUTH/login/login.component';
import { SignupComponent } from './AUTH/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';
import { NavigateComponent } from './components/home/navigate/navigate.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { AuthGuardGuard } from './services/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'navigate',
    component: NavigateComponent,
    canActivate: [AuthGuardGuard],
    children:[
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuardGuard],
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuardGuard],
      },
      {
        path: 'about',
        component: AboutComponent,
        canActivate: [AuthGuardGuard],
      },
      {
        path: 'help',
        component: HelpComponent,
        canActivate: [AuthGuardGuard],
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [AuthGuardGuard],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

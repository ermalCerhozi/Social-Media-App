import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './AUTH/login/login.component';
import { SignupComponent } from './AUTH/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NavigateComponent } from './navigate/navigate.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardGuard } from './services/guards/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './services/guards/admin.guard';

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
        path: 'profile/:id',
        component: ProfileComponent,
        canActivate: [AuthGuardGuard],
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminGuard],
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

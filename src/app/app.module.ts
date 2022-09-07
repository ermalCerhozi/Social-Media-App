import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './AUTH/login/login.component';
import { SignupComponent } from './AUTH/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditPostsComponent } from './home/edit-post/edit-posts.component';
import { CommentsListComponent } from './home/comments-list/comments-list.component';
import { LikesListComponent } from './home/likes-list/likes-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NavigateComponent } from './navigate/navigate.component';
import { NgToastModule } from 'ng-angular-popup';
import { AdminComponent } from './admin/admin.component'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AuthInterceptorInterceptor } from './services/auth-interceptor.interceptor';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { PostDialogComponent } from './profile/post-dialog/post-dialog.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, ProfileComponent, NotFoundComponent, LoginComponent, SignupComponent, EditPostsComponent, CommentsListComponent, LikesListComponent, NavigateComponent, AdminComponent, ConfirmDialogComponent, PostDialogComponent],
  entryComponents: [ EditPostsComponent, CommentsListComponent, LikesListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScrollingModule,
    NgToastModule,
    MatAutocompleteModule,
    MaterialModule
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

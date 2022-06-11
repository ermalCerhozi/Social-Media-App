import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './AUTH/login/login.component';
import { SignupComponent } from './AUTH/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MaterialModule } from './module/module.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostDialogComponent } from './components/post-dialog/post-dialog.component';
import { UpdatePostsComponent } from './components/home/edit-post/edit-posts.component';
import { CommentsListComponent } from './components/home/comments-list/comments-list.component';
import { LikesListComponent } from './components/home/likes-list/likes-list.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, ProfileComponent, AboutComponent, HelpComponent, NotFoundComponent, LoginComponent, SignupComponent, UpdatePostsComponent, CommentsListComponent, LikesListComponent],
  entryComponents: [ UpdatePostsComponent, CommentsListComponent, LikesListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

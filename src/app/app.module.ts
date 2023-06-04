import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { MySideMenuComponent } from './my-side-menu/my-side-menu.component';
import { MyMainContentComponent } from './my-main-content/my-main-content.component';

/**
 * @title Basic buttons
 */

@NgModule({
  declarations: [AppComponent, MyNavbarComponent, MySideMenuComponent, MyMainContentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GalleryCardComponent } from './gallery-card/gallery-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryListComponent,
    GalleryCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

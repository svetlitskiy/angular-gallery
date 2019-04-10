import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryListComponent } from './gallery/gallery-list/gallery-list.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatGridListModule
} from '@angular/material';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryCardComponent } from './gallery/gallery-card/gallery-card.component';
import { GalleryItemComponent } from './gallery/gallery-item/gallery-item.component';
import { CacheRouteReuseStrategy } from './cache-route-reuse.strategy';

const appRoutes: Routes = [
  { path: 'gallery',  component: GalleryListComponent },
  { path: 'gallery/item/:index',  component: GalleryItemComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GalleryListComponent,
    GalleryCardComponent,
    GalleryItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: CacheRouteReuseStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

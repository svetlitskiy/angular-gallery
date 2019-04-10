import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {GalleryItem} from './galleryItem.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryDataService {
  private galleryItems = new BehaviorSubject([]);
  currentItems: Observable<GalleryItem[]> = this.galleryItems.asObservable();

  constructor() { }

  updateItems(galleryItems: GalleryItem[]) {
    this.galleryItems.next(galleryItems);
  }
}

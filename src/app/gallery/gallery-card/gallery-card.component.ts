import { Component, OnInit, Input } from '@angular/core';
import {GalleryItem} from '../galleryItem.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.css']
})
export class GalleryCardComponent implements OnInit {
  @Input() galleryItem: GalleryItem;
  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.galleryItem);
  }

  galleryItemClick(galleryItem: GalleryItem) {
    console.log(galleryItem);
    this.router.navigate(['gallery', 'item', this.index]);
  }

}

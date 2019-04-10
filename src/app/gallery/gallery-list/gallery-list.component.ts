import {Component, OnDestroy, OnInit} from '@angular/core';
import { RequestService } from '../../api/request.service';
import { GalleryItem } from '../galleryItem.model';
import {GalleryDataService} from '../gallery-data.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent implements OnInit, OnDestroy {
  galleryItemList: GalleryItem[] = [];
  searchTags = 'kitten';
  currentIndex = 0;
  searchWatcher;

  constructor(private request: RequestService, private galleryDataService: GalleryDataService) {
  }

  ngOnInit() {
    console.log('changes');
    this.search(this.searchTags);
  }

  ngOnDestroy() {
    this.searchWatcher.unsubscribe();
  }

  search(tags: string) {
    this.searchWatcher = this.request.list(tags.split(' ')).subscribe((answer) => {
      this.galleryItemList = answer;
      this.galleryDataService.updateItems(answer);
    });
  }


  galleryItemClick(galleryItem) {
    console.log(galleryItem);
  }

  navigate(direction: number) {
    if (direction === 1 || direction === -1) {
      this.currentIndex += direction;
    }
  }

}

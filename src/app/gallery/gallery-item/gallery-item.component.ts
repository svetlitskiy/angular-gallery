import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {GalleryItem} from '../galleryItem.model';
import {GalleryDataService} from '../gallery-data.service';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit, OnDestroy {
  galleryItems: GalleryItem[];
  index: number;
  watchers = [];
  constructor(private route: ActivatedRoute, private galleryDataService: GalleryDataService, private router: Router) { }

  ngOnInit() {
    this.index = parseInt(this.route.snapshot.params.index, 10);
    this.watchers.push(
      this.galleryDataService.currentItems.subscribe(items => this.galleryItems = items),
      this.route.params.subscribe(
        (params: Params) => {
          this.index = parseInt(params.index, 10);
        })
    );
  }

  ngOnDestroy() {
    this.watchers.forEach(watcher => watcher.unsubscribe());
  }

  next(direction: number) {
    const index = direction > 0 ? this.index + 1 : this.index - 1;
    this.router.navigate(['gallery', 'item', index]);

  }

  close() {
    this.router.navigate(['gallery']);
  }


}

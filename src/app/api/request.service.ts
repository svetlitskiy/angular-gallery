import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GalleryItem } from '../gallery/galleryItem.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) {
  }

  list(tags: string[]): Observable<GalleryItem[]> {
    let params = new HttpParams();
    params = params.set('format', 'json');
    params = params.set('tags', tags.join(','));
    params = params.set('nojsoncallback', '?');
    return this.httpClient.get('https://api.flickr.com/services/feeds/photos_public.gne', {params}).pipe(
      map((result: {items: any[]}) => {
        const ret: GalleryItem[] = [];
        result.items.forEach((item) => {
          const link = item.media.m.replace('_m.jpg', '.jpg');

          const newItem = new GalleryItem(item.title, item.media.m, link, item.description.toString(), item.tags);

          ret.push(newItem);
        });
        return ret;
      })
    );
  }

}

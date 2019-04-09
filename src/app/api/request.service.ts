import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) {
  }

  list(): Observable<any> {
    let params = new HttpParams();
    params = params.set('format', 'json');
    params = params.set('tags', 'kitten');
    params = params.set('nojsoncallback', '?');
    return this.httpClient.get('https://api.flickr.com/services/feeds/photos_public.gne', {
      params: params
    }).pipe(
      map((result) => {
        return result.items;
      })
    );
  }

}

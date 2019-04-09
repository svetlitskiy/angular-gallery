import { Component, OnInit } from '@angular/core';
import { RequestService } from '../api/request.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent implements OnInit {


  constructor(private request: RequestService) { }

  ngOnInit() {
    console.log('init');
    this.request.list().subscribe((answer) => {
      console.log(answer);
    });
  }

}

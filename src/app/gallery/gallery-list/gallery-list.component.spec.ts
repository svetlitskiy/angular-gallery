import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { GalleryListComponent } from './gallery-list.component';
import { RequestService } from '../../api/request.service';
import { GalleryDataService } from '../gallery-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { GalleryItem } from '../galleryItem.model';
import {GalleryCardComponent} from '../gallery-card/gallery-card.component';
import { MatCardModule } from '@angular/material';
import { Router } from '@angular/router';

describe('GalleryListComponent', () => {
  let component: GalleryListComponent;
  let fixture: ComponentFixture<GalleryListComponent>;

  const requestService = {
    list: jasmine.createSpy('list').and.returnValue(of([new GalleryItem('title', 'http://localhost/1.jpg',
      'http://localhost/1_m.jpg', '', 'a b c')]))
  };

  const dataService = {
    updateItems: jasmine.createSpy('updateItems')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryListComponent, GalleryCardComponent],
      imports: [MatInputModule, FormsModule, BrowserAnimationsModule, MatCardModule],
      providers: [{
        provide: RequestService,
        useValue: requestService
      }, {
        provide: GalleryDataService,
        useValue: dataService
      }, {
        provide: Router,
        useValue: {}
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('function search()', () => {
    component.search('dog cat');
    console.log('dog cat'.split(' '));
    expect(requestService.list).toHaveBeenCalledWith(['dog', 'cat']);
    expect(dataService.updateItems).toHaveBeenCalledWith([new GalleryItem('title',
      'http://localhost/1.jpg', 'http://localhost/1_m.jpg', '', 'a b c')]);
  });
});

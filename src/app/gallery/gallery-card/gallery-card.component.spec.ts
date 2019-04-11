import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material';
import { GalleryCardComponent } from './gallery-card.component';
import { Router } from '@angular/router';
import { GalleryItem } from '../galleryItem.model';

describe('GalleryCardComponent', () => {
  let component: GalleryCardComponent;
  let fixture: ComponentFixture<GalleryCardComponent>;

  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryCardComponent],
      imports: [MatCardModule],
      providers: [{
        provide: Router,
        useValue: router
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryCardComponent);
    component = fixture.componentInstance;
    component.galleryItem = new GalleryItem('title', 'http://localhost/1.jpg',
      'http://localhost/1_m.jpg', '', 'a b c');
    component.index = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('function galleryItemClick()', () => {
    component.galleryItemClick();
    expect(router.navigate).toHaveBeenCalledWith(['gallery', 'item', 1]);
  });
});

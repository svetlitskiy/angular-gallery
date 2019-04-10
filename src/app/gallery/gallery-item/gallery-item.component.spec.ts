import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material';
import { GalleryItemComponent } from './gallery-item.component';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryDataService } from '../gallery-data.service';



fdescribe('GalleryItemComponent', () => {
  let component: GalleryItemComponent;
  let fixture: ComponentFixture<GalleryItemComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [GalleryItemComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          params: of({index: 0}),
          snapshot: {
            params: {
              index: '1'
            }
          }
        }
      }, {
        provide: GalleryDataService,
        useValue: {
          currentItems: of([{title: 'test title', src: 'http://192.168.1.1/img1.jpg'}])
        }
      },
        {
          provide: Router,
          useValue: {
            navigate: () => {
            }
          }
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('variables', () => {
    expect(component.galleryItems).toEqual([{title: 'test title', src: 'http://192.168.1.1/img1.jpg'}]);
    expect(component.watchers.length).toBe(2);
  });
});

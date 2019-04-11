import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material';
import { GalleryItemComponent } from './gallery-item.component';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryDataService } from '../gallery-data.service';



describe('GalleryItemComponent', () => {
  let component: GalleryItemComponent;
  let fixture: ComponentFixture<GalleryItemComponent>;

  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [GalleryItemComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          params: of({index: 1}),
          snapshot: {
            params: {
              index: '1'
            }
          }
        }
      }, {
        provide: GalleryDataService,
        useValue: {
          currentItems: of([{
            title: 'test title',
            link: 'http://192.168.1.1/img1.jpg',
            img: 'http://192.168.1.1/img1_m.jpg',
            description: '',
            tags: ['a', 'b']
          }, {
            title: 'test title 2',
            link: 'http://192.168.1.1/img2.jpg',
            img: 'http://192.168.1.1/img2_m.jpg',
            description: '',
            tags: ['b', 'c']
          }])
        }
      },
        {
          provide: Router,
          useValue: router
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
    expect(component.galleryItems.length).toBe(2);
    expect(component.watchers.length).toBe(2);
    expect(component.index).toBe(1);
  });

  describe('function next()',  () => {
    it('function next(1)', () => {
      component.next(1);
      expect(router.navigate).toHaveBeenCalledWith(['gallery', 'item', 2]);
    });
    it('function next(-1)', () => {
      component.next(-1);
      expect(router.navigate).toHaveBeenCalledWith(['gallery', 'item', 0]);
    });
  });


  it('function close()', () => {
    component.close();
    expect(router.navigate).toHaveBeenCalledWith(['gallery']);
  });
});

import { TestBed } from '@angular/core/testing';
import { RequestService } from './request.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {GalleryItem} from '../gallery/galleryItem.model';


describe('RequestService', () => {
  let service: RequestService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RequestService]
    });
    service = TestBed.get(RequestService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('list', () => {
    const mock = {
      items: [
        {
          title: 'My beautiful cat',
          link: 'https:\/\/www.flickr.com\/photos\/152575195@N06\/32641663227\/',
          media: {m: 'https:\/\/live.staticflickr.com\/7866\/32641663227_122b1cc3d8_m.jpg'},
          date_taken: '2019-04-05T15:29:57-08:00',
          description: 'description 1',
          published: '2019-04-11T06:37:55Z',
          author: 'nobody@flickr.com (\'tiphanyo\')',
          author_id: '152575195@N06',
          tags: 'cat kitten animals beautiful colored'
        },
        {
          title: '000315800015',
          link: 'https:\/\/www.flickr.com\/photos\/psbirch\/47584065201\/',
          media: {m: 'https:\/\/live.staticflickr.com\/7840\/47584065201_4d293bb728_m.jpg'},
          date_taken: '2019-04-10T22:53:24-08:00',
          description: 'description 2',
          published: '2019-04-11T05:57:11Z',
          author: 'nobody@flickr.com (\'psbirch\')',
          author_id: '54849345@N00',
          tags: 'pentax k1000 film portra 400 cat kitten unicorn leatherchair'
        }
      ]
    };

    service.list(['dog', 'cat']).subscribe(data => {
      expect(data.length).toBe(2);
      expect(data[1]).toEqual(new GalleryItem(
        '000315800015',
        'https:\/\/live.staticflickr.com\/7840\/47584065201_4d293bb728_m.jpg',
        'https:\/\/live.staticflickr.com\/7840\/47584065201_4d293bb728.jpg',
        'description 2',
        'pentax k1000 film portra 400 cat kitten unicorn leatherchair'));
    });

    const req = httpMock.expectOne(`https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=dog,cat&nojsoncallback=?`);
    expect(req.request.method).toBe('GET');
    req.flush(mock);

  });

  afterEach(() => {
    httpMock.verify();
  });

});

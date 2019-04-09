import { TestBed } from '@angular/core/testing';

import { RequestService } from './request.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http';
//import {Observable} from "rxjs";


describe('RequestService', () => {
  let httpClient: HttpTestingController;
  let service: RequestService;
  //let httpParams: HttpParams;
  //let observable: Observable;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [httpClient]
    });
    service = TestBed.get(RequestService);
    httpClient = TestBed.get(HttpTestingController);
    //httpParams = TestBed.get(HttpParams);
  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

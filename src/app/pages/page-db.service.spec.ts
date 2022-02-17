import { TestBed } from '@angular/core/testing';

import { PageDBService } from './page-db.service';

describe('PageDBService', () => {
  let service: PageDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

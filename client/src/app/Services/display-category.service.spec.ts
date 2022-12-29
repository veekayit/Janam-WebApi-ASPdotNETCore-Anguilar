import { TestBed } from '@angular/core/testing';

import { DisplayCategoryService } from './display-category.service';

describe('DisplayCategoryService', () => {
  let service: DisplayCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

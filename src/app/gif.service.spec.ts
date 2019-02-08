import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { GifService } from './gif.service';

describe('GifService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ],
  }));

  it('should be created', () => {
    const service: GifService = TestBed.get(GifService);
    expect(service).toBeTruthy();
  });
});

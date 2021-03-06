import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';

import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';

import { GifsEffects } from './gifs.effects';

describe('GifsEffects', () => {
  let actions$: Observable<any>;
  let effects: GifsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        GifsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(GifsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

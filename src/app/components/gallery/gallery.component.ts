import { Component, OnInit } from '@angular/core';
import { Gif } from '../../store/gifs/gif';
import { Store } from '@ngrx/store';
import { State, SELECTORS, ACTIONS } from '../../store';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gifs: Array<Gif>;

  constructor(private store: Store<State>) {
    store
      .select(SELECTORS.gifsByKeyword)
      .subscribe(gifs => {
        this.gifs = gifs
      });
  }

  ngOnInit() {
    this.store.dispatch(new ACTIONS.FetchInitGifs())
  }

}

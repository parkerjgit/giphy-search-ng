import { Component, OnInit } from '@angular/core';
import { GifService } from '../services/gif.service';
import { Gif } from '../gif';
import { Observable } from 'rxjs';
import { State, getGifs, gifsByKeyword, sortedGifs } from '../reducers';
import { Store } from '@ngrx/store';
import { ActionTypes } from '../actions/gifs.actions';
// import { GIFS } from '../fake_gifs'

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  // gifs: Gif[];
  gifs: Array<Gif>;

  // constructor(private gifService: GifService) {}
  constructor(private store: Store<State>) {
    store
      .select(gifsByKeyword)
      .subscribe(gifs => {
        //console.log(gifs)
        this.gifs = gifs
      });
  }

  ngOnInit() {
    // this.gifService.getGifs().subscribe(gifs => this.gifs = gifs);
    this.store.dispatch({ type: ActionTypes.FetchInitGifs})
  }

}

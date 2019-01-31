import { Component, OnInit } from '@angular/core';
import { GifService } from '../gif.service';
import { Gif } from '../gif';
import { Observable } from 'rxjs';
import { State } from '../reducers';
import { Store } from '@ngrx/store';
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
      .select(state => state.gifs)
      .subscribe(gifs => this.gifs = gifs.gifs);
  }

  ngOnInit() {
    // this.gifService.getGifs().subscribe(gifs => this.gifs = gifs);
    this.store.dispatch({ type: '[Gifs] Fetch Init Gifs'})
  }

}

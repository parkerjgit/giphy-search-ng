import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { State, getGifs, sortedGifs } from '../../reducers';
import { Store } from '@ngrx/store';
import { ActionTypes, FetchGifsByKeyword } from '../../actions/gifs.actions';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent{
  searchTerms = new FormControl('');

  constructor(private store: Store<State>) { }

  handleSubmit(event: Event) {
    event.preventDefault;
    // this.store.dispatch({ type: ActionTypes.FetchGifsByKeyword })
    this.store.dispatch(new FetchGifsByKeyword(this.searchTerms.value))
    this.searchTerms.setValue('');
  }

}

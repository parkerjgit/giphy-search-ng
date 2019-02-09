import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { State, ACTIONS } from '../../store';

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
    this.store.dispatch(new ACTIONS.FetchGifsByKeyword(this.searchTerms.value))
    this.searchTerms.setValue('');
  }

}

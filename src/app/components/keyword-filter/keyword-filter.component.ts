import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, SELECTORS, ACTIONS } from '../../store';

@Component({
  selector: 'keyword-filter',
  templateUrl: './keyword-filter.component.html',
  styleUrls: ['./keyword-filter.component.css']
})
export class KeywordFilterComponent {
  keywords: Array<string>;

  constructor(private store: Store<State>) {
    store
      .select(SELECTORS.getKeywords)
      .subscribe(keywords => {
        this.keywords = keywords
      })
   }

   filterOutByKeyword(keyword: string) {
     this.store.dispatch(new ACTIONS.FilterOutByKeyword(keyword));
   }

}

import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectEventList } from '../../store/selectors/event.selectors';
import { IAppState } from '../../store/state/app.state';

@Component({
  selector: 'app-search-events',
  styleUrls: ['./search-events.component.sass'],
  templateUrl: './search-events.component.html'
})
export class SearchEventsComponent implements OnInit {
  showResult = false;
  searchText: string;
  events$ = this._store.pipe(select(selectEventList));
  constructor(private _store: Store<IAppState>) { }

  ngOnInit() {
  }

  isTextAreaEmpty() {
    this.showResult = this.searchText !== '';
  }
}

import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IEvent } from '../../models/event.interface';
import { DeleteEvent, GetEvents, SelectEditEvent } from '../../store/actions/event.actions';
import { selectEventList } from '../../store/selectors/event.selectors';
import { IAppState } from '../../store/state/app.state';

@Component({
  selector: 'app-events-container',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {
  events$ = this._store.pipe(select(selectEventList));
  eventsWithStatus$: Observable<any>;
  pastEvents$: Observable<any>;
  ongoingEvents$: Observable<any>;
  futureEvents$: Observable<any>;

  constructor(private _store: Store<IAppState>) { }

  ngOnInit() {
    this._store.dispatch(new GetEvents());
    this.pastEvents$ = this.events$.pipe(map((events: any) => {
      const pastEvents = events
      .filter((event: IEvent) => {
        const endDate = event.startDate + (event.durationMinutes * 60000);
        if (moment().isAfter(endDate)) {
          return event;
        }
      });
      return pastEvents;
    }));
    this.ongoingEvents$ = this.events$.pipe(map((events: any) => {
      const ongoingEvents = events
      .filter((event: IEvent) => {
        const endDate = event.startDate + (event.durationMinutes * 60000);
        if (moment().isAfter(event.startDate) && moment().isBefore(endDate)) {
          return event;
        }
      });
      return ongoingEvents;
    }));
    this.futureEvents$ = this.events$.pipe(map((events: any) => {
      const futureEvents = events
      .filter((event: IEvent) => {
        if (moment().isBefore(event.startDate)) {
          return event;
        }
      });
      return futureEvents;
    }));
  }

  dispatchEdit(event: IEvent): void {
    this._store.dispatch(new SelectEditEvent(event));
  }

  deleteEvent(id: number): void {
    this._store.dispatch(new DeleteEvent(id));
  }

}

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import { IEventHttp } from '../../models/http-models/event-http.interface';
import { EventService } from '../../services/event.service';
import { EEventActions, GetEvents, GetEventsSuccess } from '../actions/event.actions';

@Injectable()
export class EventEffects {
  @Effect()
  getEvents$ = this._actions$.pipe(
    ofType<GetEvents>(EEventActions.GetEvents),
    switchMap(() => this._eventService.getEvents()),
    switchMap((eventHttp: IEventHttp) => of(new GetEventsSuccess(eventHttp.events)))
  );

  constructor(
    private _eventService: EventService,
    private _actions$: Actions
  ) { }
}

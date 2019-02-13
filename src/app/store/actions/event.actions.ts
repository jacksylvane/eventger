import { Action } from '@ngrx/store';
import { IEvent } from '../../models/event.interface';

export enum EEventActions {
  GetEvents = '[Event] Get Events',
  GetEventsSuccess = '[Event] Get Events Success',
  GetEvent = '[Event] Get Event',
  GetEventSuccess = '[Event] Get Event Success',
  SaveEvent = '[Event] Save Event',
  DeleteEvent = '[Event] Delete Event',
  SelectEditEvent = '[Event] Select Edit Event',
  EditEvent = '[Event] Edit Event'
}

export class GetEvents implements Action {
  readonly type = EEventActions.GetEvents;
}

export class GetEventsSuccess implements Action {
  readonly type = EEventActions.GetEventsSuccess;
  constructor(public payload: IEvent[]) { }
}

export class SaveEvent implements Action {
  readonly type = EEventActions.SaveEvent;
  constructor(public payload: IEvent ) { }
}

export class DeleteEvent implements Action {
  readonly type = EEventActions.DeleteEvent;
  constructor(public payload: number ) { }
}

export class SelectEditEvent implements Action {
  readonly type = EEventActions.SelectEditEvent;
  constructor(public payload: IEvent ) { }
}

export class EditEvent implements Action {
  readonly type = EEventActions.EditEvent;
  constructor(public payload: IEvent ) { }
}

export type EventActions = GetEvents | GetEventsSuccess | SaveEvent | DeleteEvent | SelectEditEvent | EditEvent;

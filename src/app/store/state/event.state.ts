import { IEvent } from '../../models/event.interface';

export interface IEventState {
  events: IEvent[];
  editingEvent: IEvent;
}

export const initialEventState: IEventState = {
  editingEvent: null,
  events: []
};

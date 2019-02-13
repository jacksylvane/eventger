import { IEvent } from '../../models/event.interface';
import { EEventActions, EventActions } from '../actions/event.actions';
import { IEventState, initialEventState } from '../state/event.state';

export const eventReducers = (
  state = initialEventState,
  action: EventActions
): IEventState => {
  switch (action.type) {
    case EEventActions.GetEventsSuccess: {
      return {
        ...state,
        events: action.payload
      };
    }
    case EEventActions.SaveEvent: {
      return {
        ...state,
        events: [...state.events, action.payload]
      };
    }
    case EEventActions.DeleteEvent: {
      const updatedEvents: IEvent[] = state.events.filter((event) => event.id !== action.payload);
      return {
        ...state,
        events: updatedEvents
      };
    }
    case EEventActions.SelectEditEvent: {
      return {
        ...state,
        editingEvent : action.payload
      };
    }
    case EEventActions.EditEvent: {
      const updatedEvents: IEvent[] = state.events.filter((event) => event.id !== action.payload.id);
      return {
        ...state,
        editingEvent: null,
        events: [...updatedEvents, action.payload]
      };
    }
    default:
      return state;
  }
};

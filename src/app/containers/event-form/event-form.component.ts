import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { IEvent } from '../../models/event.interface';
import { EditEvent, SaveEvent } from '../../store/actions/event.actions';
import { selectEditingEvent } from '../../store/selectors/event.selectors';
import { IAppState } from '../../store/state/app.state';
@Component({
  selector: 'app-event-form-container',
  templateUrl: './event-form.component.html'
})
export class EventFormComponent implements OnInit {
  eventForm: FormGroup;
  editingEvent$ = this._store.pipe(select(selectEditingEvent));
  constructor(
    private fb: FormBuilder,
    private _store: Store<IAppState>
    ) {
    this.eventForm = fb.group({
      eventName: [null, Validators.required],
      id: null,
      owner: [null, Validators.required]
    });
   }

  ngOnInit() {
    this.editingEvent$.subscribe((event: IEvent) => {
      this.eventForm.setValue(
        {
          eventName: event ? event.name : '',
          id: event ? event.id : null,
          owner: event ? event.owner : ''
        }
        );
    });

  }

  saveForm(): void {
    const value = this.eventForm.value;
    const event = {
      address: {
        city: 'Los Angeles',
        country: 'USA',
        number: '1',
        street: 'Broadway',
        zipcode: '500000'
      },
      description: 'Great Country',
      durationMinutes: 120,
      name: value.eventName,
      owner: value.owner,
      startDate: 1550006888000
    };
    if (value.id) {
      const payload: IEvent = {...event, id: value.id};
      this._store.dispatch(new EditEvent(payload));
    } else {
      // Id here should be of course generated wisely or just send an event without id and let the server do the work
      const payload: IEvent = { ...event, id: 4 };
      this._store.dispatch(new SaveEvent(payload));
    }
  }
}

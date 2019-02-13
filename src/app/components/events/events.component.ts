import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEvent } from '../../models/event.interface';

@Component({
  selector: 'app-events',
  styleUrls: ['./events.component.sass'],
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {
  @Input() pastEvents: IEvent[];
  @Input() ongoingEvents: IEvent[];
  @Input() futureEvents: IEvent[];
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter();
  @Output() editEvent: EventEmitter<IEvent> = new EventEmitter();
  constructor() { }

  ngOnInit() { }
    emitButtonClicked(id: number): void {
      this.deleteEvent.emit(id);
    }
    emitEditButtonClicked(event: IEvent): void {
      this.editEvent.emit(event);
    }

}

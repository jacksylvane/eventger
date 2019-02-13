import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IEventHttp } from '../models/http-models/event-http.interface';

@Injectable()
export class EventService {
  eventsUrl = `${environment.apiUrl}events.json`;

  constructor(private _http: HttpClient) { }

  getEvents(): Observable<IEventHttp> {
    return this._http.get<IEventHttp>(this.eventsUrl);
  }
}

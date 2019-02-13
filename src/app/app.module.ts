import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EventsDashboardComponent } from './components/events-dashboard/events-dashboard.component';
import { EventsComponent } from './components/events/events.component';
import { SearchEventsComponent } from './components/search-events/search-events.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { InputComponent } from './components/shared/input/input.component';
import { EventFormComponent as EventsFormContainerComponent} from './containers/event-form/event-form.component';
import { EventsComponent as EventsContainerComponent } from './containers/events/events.component';
import { DurationPipe } from './pipes/duration.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { EventService } from './services/event.service';
import { EventEffects } from './store/effects/event.effects';
import { appReducers } from './store/reducers/app.reducers';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    EventsComponent,
    EventsContainerComponent,
    DurationPipe,
    SearchPipe,
    SearchEventsComponent,
    EventsDashboardComponent,
    EventFormComponent,
    EventsFormContainerComponent,
    InputComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([EventEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventService]
})
export class AppModule { }

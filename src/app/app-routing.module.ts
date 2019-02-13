import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsDashboardComponent } from './components/events-dashboard/events-dashboard.component';

const routes: Routes = [
  { path: 'events', component: EventsDashboardComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}

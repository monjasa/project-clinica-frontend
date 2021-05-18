import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentsComponent } from './appointments.component';
import { AppointmentsFormComponent } from './appointments-form/appointments-form.component';

const routes: Routes = [{
  path: '',
  component: AppointmentsComponent,
  children: [
    {
      path: 'create',
      component: AppointmentsFormComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsRoutingModule { }

export const routedComponents = [
  AppointmentsComponent,
  AppointmentsFormComponent,
];

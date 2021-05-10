import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsComponent } from './patients.component';
import { PatientsTableComponent } from './patients-table/patients-table.component';
import { PatientsFormComponent } from './patients-form/patients-form.component';

const routes: Routes = [{
  path: '',
  component: PatientsComponent,
  children: [
    {
      path: 'all',
      component: PatientsTableComponent,
    },
    {
      path: 'create',
      component: PatientsFormComponent,
    },
    {
      path: 'edit/:id',
      component: PatientsFormComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule { }

export const routedComponents = [
  PatientsComponent,
  PatientsTableComponent,
  PatientsFormComponent,
];

import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbAutocompleteModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule as ngFormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { AppointmentsRoutingModule, routedComponents } from './appointments-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    AppointmentsRoutingModule,
    Ng2SmartTableModule,
    NbButtonModule,
    NbActionsModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    NbFormFieldModule,
    NbAutocompleteModule,
    ngFormsModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class AppointmentsModule {
}

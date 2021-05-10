import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule as ngFormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { routedComponents, PatientsRoutingModule } from './patients-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    PatientsRoutingModule,
    Ng2SmartTableModule,
    NbButtonModule,
    NbActionsModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    NbFormFieldModule,
    ngFormsModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class PatientsModule { }

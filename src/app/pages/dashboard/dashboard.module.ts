import { NgModule } from '@angular/core';
import { NbCardModule, NbProgressBarModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { ECommerceProgressSectionComponent } from './progress-section/progress-section.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbProgressBarModule,
  ],
  declarations: [
    DashboardComponent,
    ECommerceProgressSectionComponent,
  ],
})
export class DashboardModule {
}

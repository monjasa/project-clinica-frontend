import { Injectable } from '@angular/core';
import { ProgressInfo } from '../../shared/models/progress-info.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatsProgressBarService {
  private progressInfoData: ProgressInfo[] = [
    {
      title: 'Weekly Profit',
      value: 372900,
      activeProgress: 70,
      description: 'Better than last week (70%)',
    },
    {
      title: 'Completed Appointments',
      value: 1155,
      activeProgress: 30,
      description: 'Better than last week (30%)',
    },
    {
      title: 'New Patients',
      value: 311,
      activeProgress: 55,
      description: 'Better than last week (55%)',
    },
  ];

  getProgressInfoData(): Observable<ProgressInfo[]> {
    return of(this.progressInfoData);
  }
}

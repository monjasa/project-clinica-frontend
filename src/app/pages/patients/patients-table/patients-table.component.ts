import { Component } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';

import { PatientService } from '../../../services/http/patient.service';
import { NbButtonComponent } from '@nebular/theme';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './patients-table.component.html',
  styleUrls: ['./patients-table.component.scss'],
})
export class PatientsTableComponent {

  settings = {
    hideSubHeader: true,
    actions: null,
    columns: {
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      insuranceNumber: {
        title: 'Insurance Number',
        type: 'string',
      },
      height: {
        title: 'Height',
        type: 'number',
      },
      weight: {
        title: 'Weight',
        type: 'number',
      },
      bloodType: {
        title: 'Blood Type',
        type: 'string',
      },
      id: {
        type: 'html',
        valuePrepareFunction: (id) => {
          return `<a href="/pages/patients/edit/${id}">Edit</a>`;
        },
      },
    },
    pager: {
      display: true,
      perPage: 20,
    },
    noDataMessage: 'Please wait a moment while we load data...',
  };

  public source: ServerDataSource;

  constructor(private patientService: PatientService) {
    this.source = this.patientService.getPatientMedicalRecordDataSource();
  }
}

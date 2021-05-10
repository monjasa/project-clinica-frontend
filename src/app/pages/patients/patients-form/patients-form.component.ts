import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../../services/http/patient.service';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./patients-form.component.scss'],
  templateUrl: './patients-form.component.html',
})
export class PatientsFormComponent implements OnInit {

  public patient: PatientModel;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      if (id) {
        this.patientService.getPatient(id)
          .subscribe(value => this.patient = value);
      }
    });
  }
}

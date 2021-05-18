import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PatientService } from '../../../services/http/patient.service';
import { $e } from 'codelyzer/angular/styles/chars';
import { ClinicService } from '../../../services/http/clinic.service';
import { MedicalEmployeeService } from '../../../services/http/medical-employee.service';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./appointments-form.component.scss'],
  templateUrl: './appointments-form.component.html',
})
export class AppointmentsFormComponent implements OnInit {

  isHouseCall: boolean;

  patients: NamedIdentificationModel[];
  filteredPatients: Observable<NamedIdentificationModel[]>;
  selectedPatient: NamedIdentificationModel;

  clinics: NamedIdentificationModel[];
  filteredClinics: Observable<NamedIdentificationModel[]>;
  selectedClinic: NamedIdentificationModel;

  employees: NamedIdentificationModel[];
  filteredEmployees: Observable<NamedIdentificationModel[]>;
  selectedEmployee: NamedIdentificationModel;

  @ViewChild('inputClinic') inputClinic;
  @ViewChild('inputPatient') inputPatient;
  @ViewChild('inputEmployee') inputEmployee;

  constructor(
    private clinicService: ClinicService,
    private patientService: PatientService,
    private medicalEmployeeService: MedicalEmployeeService,
  ) {
  }

  ngOnInit() {
    this.filteredPatients = this.patientService.getPatientNames();
    this.filteredPatients.subscribe(value => this.patients = value);

    this.filteredClinics = this.clinicService.getClinicNames();
    this.filteredClinics.subscribe(value => this.clinics = value);

    this.filteredEmployees = this.medicalEmployeeService.getMedicalEmployeeNames();
    this.filteredEmployees.subscribe(value => this.employees = value);
  }

  private filterOptions(name: string, options: NamedIdentificationModel[]): NamedIdentificationModel[] {
    return options.filter(value => value.name.toLowerCase().includes(name.toLowerCase()));
  }

  getFilteredOptions(value: string, options: NamedIdentificationModel[]): Observable<NamedIdentificationModel[]> {
    return of(value).pipe(
      map(filterString => this.filterOptions(filterString, this.patients)),
    );
  }

  onClinicChange() {
    this.filteredClinics = this.getFilteredOptions(this.inputClinic.nativeElement.value, this.clinics);
  }

  onPatientChange() {
    this.filteredPatients = this.getFilteredOptions(this.inputPatient.nativeElement.value, this.patients);
  }

  onEmployeeChange() {
    this.filteredEmployees = this.getFilteredOptions(this.inputEmployee.nativeElement.value, this.employees);
  }

  onClinicSelectionChange($event: string) {
    this.filteredClinics = this.getFilteredOptions($event, this.clinics);
    this.selectedClinic = this.clinics.find(value => value.name === $event);
  }

  onPatientSelectionChange($event: string) {
    this.filteredPatients = this.getFilteredOptions($event, this.patients);
    this.selectedPatient = this.patients.find(value => value.name === $event);
  }

  onEmployeeSelectionChange($event: string) {
    this.filteredEmployees = this.getFilteredOptions($event, this.employees);
    this.selectedEmployee = this.employees.find(value => value.name === $event);
  }

  toggle($event: boolean) {
    this.isHouseCall = $event;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';
import { CustomServerDataSource } from '../../shared/models/default-server-data-source';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {

  constructor(private http: HttpClient) {
  }

  public getPatient(id: number): Observable<PatientModel> {
    return this.http.get<PatientModel>(`${environment.apiUri}/patients/${id}`);
  }

  public getPatientNames(): Observable<NamedIdentificationModel[]> {
    return this.http.get<NamedIdentificationModel[]>(`${environment.apiUri}/patients/names`);
  }

  public getPatientMedicalRecordDataSource(): ServerDataSource {
    return new CustomServerDataSource(this.http, {
      endPoint: `${environment.apiUri}/patients/medical-records`,
      dataKey: 'content',
      pagerPageKey: 'page',
      pagerLimitKey: 'size',
      sortFieldKey: 'sort',
      totalKey: 'totalElements',
    });
  }
}

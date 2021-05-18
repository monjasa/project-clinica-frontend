import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MedicalEmployeeService {

  constructor(private http: HttpClient) {
  }

  public getMedicalEmployeeNames(): Observable<NamedIdentificationModel[]> {
    return this.http.get<NamedIdentificationModel[]>(`${environment.apiUri}/medical-employees/names`);
  }
}

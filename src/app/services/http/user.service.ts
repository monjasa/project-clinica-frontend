import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  public getCurrentUser(): Observable<UserModel> {
    return this.http.get<UserModel>(`${environment.apiUri}/users/current`);
  }
}

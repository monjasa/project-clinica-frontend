import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  public getCurrentUser(): Observable<UserModel> {
    return this.http.get<UserModel>('http://localhost:4200/api/users/current');
  }
}

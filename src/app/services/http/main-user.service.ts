import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainUserService {

  constructor(private http: HttpClient) {
  }

  public getMainUsers(): Observable<MainUser[]> {
    return this.http.get<PageableArray<MainUser>>('http://localhost:4200/api/user/all')
      .pipe(
        map(value => value.content),
      );
  }
}

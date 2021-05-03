import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ServerDataSource } from 'ng2-smart-table';
import { CustomServerDataSource } from '../../shared/models/default-server-data-source';

@Injectable({
  providedIn: 'root',
})
export class MainUserService {

  constructor(private http: HttpClient) {
  }

  public getMainUsersServerDataSource(): ServerDataSource {
    return new CustomServerDataSource(this.http, {
      endPoint: 'http://localhost:4200/api/user/all',
      dataKey: 'content',
      pagerPageKey: 'page',
      pagerLimitKey: 'size',
      sortFieldKey: 'sort',
      totalKey: 'totalElements',
    });
  }

  public getMainUsers(): Observable<MainUser[]> {
    return this.http.get<PageableArray<MainUser>>('http://localhost:4200/api/user/all')
      .pipe(
        map(value => value.content),
      );
  }
}

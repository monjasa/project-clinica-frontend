import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { MainUserService } from '../../../services/http/main-user.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {

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
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private mainUserService: MainUserService) {
    this.mainUserService.getMainUsers()
      .subscribe(data => this.source.load(data));
  }
}

import { Component } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';

import { MainUserService } from '../../../services/http/main-user.service';
import { UserService } from '../../../services/http/user.service';

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
    pager: {
      display: true,
      perPage: 3,
    },
    noDataMessage: 'Please, wait a moment while we load data...',
  };

  source: ServerDataSource;

  constructor(private mainUserService: MainUserService, private userService: UserService) {
    // this.source = this.mainUserService.getMainUsersServerDataSource();
    this.userService.getCurrentUser().subscribe(value => console.log(value));
  }
}

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'ngx-oauth2',
  templateUrl: './oauth2.component.html',
  styleUrls: ['./oauth2.component.scss'],
})
export class Oauth2Component implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {}

  public ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const accessToken = params['accessToken'];
      if (accessToken) {
        this.authenticationService.addTokenToLocalStorage(params);
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['authentication/login']);
      }
    });
  }
}

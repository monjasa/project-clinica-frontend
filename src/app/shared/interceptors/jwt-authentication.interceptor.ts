import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../authentication/service/authentication.service';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class JwtAuthenticationInterceptor implements HttpInterceptor {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.authenticationService.getAccessTokenForCurrentUser();
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }

    return next.handle(request).pipe(
      catchError(response => {
        if (response.status === 401) {
          this.authenticationService.removeTokenFromLocalStorage();
          this.router.navigate(['/authentication/login']);
          return new Observable<HttpEvent<any>>();
        }
      }),
    );
  }
}

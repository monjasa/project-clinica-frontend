import { Injectable } from '@angular/core';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  public addTokenToLocalStorage(params: Params) {
    localStorage.setItem('accessToken', params['accessToken']);
  }

  public removeTokenFromLocalStorage() {
    localStorage.removeItem('accessToken');
  }

  public getAccessTokenForCurrentUser(): string {
    return localStorage.getItem('accessToken');
  }
}

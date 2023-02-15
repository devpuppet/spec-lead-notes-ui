import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { map, Observable, shareReplay } from 'rxjs';
import { AuthResult } from './auth.service.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiBaseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/login`, { username, password }).pipe(
      map(res => this.setSession(res)),
      shareReplay()
    );
  }

  private setSession(authResult: AuthResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.jwtBearerToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration(): moment.Moment {
    const expiration = localStorage.getItem('expires_at');

    if (!expiration) {
      throw new Error('No expires_at found');
    }

    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}

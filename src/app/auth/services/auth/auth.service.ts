import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { map, Observable, shareReplay } from 'rxjs';
import { AuthResult } from '../../models/auth.service.model';

@Injectable()
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

    localStorage.setItem('userId', authResult.userId);
    localStorage.setItem('id_token', authResult.jwtBearerToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn(): boolean {
    const expiration = this.getExpiration();
    return !!expiration && moment().isBefore(expiration);
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration(): moment.Moment | null {
    const expiration = localStorage.getItem('expires_at');

    if (!expiration) {
      return null;
    }

    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}

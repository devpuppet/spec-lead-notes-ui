import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { map, Observable, shareReplay, Subscription } from 'rxjs';
import { AuthData } from '../../models/auth.service.model';
import { Store } from '@ngrx/store';
import { setAuthDataAction, removeAuthDataAction } from 'src/app/login/store/login.actions';
import { selectExpiration } from 'src/app/login/store/login.selectors';

@Injectable()
export class AuthService implements OnDestroy {

  private apiBaseUrl = 'http://localhost:3000';
  private expiration$?: Subscription;

  constructor(
    private http: HttpClient,
    private store: Store
  ) { }

  login(username: string, password: string): Observable<AuthData> {
    return this.http.post<any>(`${this.apiBaseUrl}/login`, { username, password }).pipe(
      map(res => this.setSession(res)),
      shareReplay()
    );
  }

  private setSession(authResult: AuthData): AuthData {
    const expiresIn = moment().add(authResult.expiresIn, 'second');

    this.store.dispatch(setAuthDataAction({
      authData: {
        userId: authResult.userId,
        jwtBearerToken: authResult.jwtBearerToken,
        expiresIn: +JSON.stringify(expiresIn.valueOf())
      }
    }));

    return authResult;
  }

  logout(): void {
    this.store.dispatch(removeAuthDataAction());
  }

  public isLoggedIn(): boolean {
    const expiration = this.getExpiration();
    return !!expiration && moment().isBefore(expiration);
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration(): moment.Moment | null {
    let expiration;

    this.expiration$ = this.store.select(selectExpiration)
      .subscribe(value => expiration = value);

    if (!expiration) {
      return null;
    }

    const expiresIn = JSON.parse(expiration);
    return moment(expiresIn);
  }

  ngOnDestroy(): void {
    this.expiration$?.unsubscribe();
  }
}

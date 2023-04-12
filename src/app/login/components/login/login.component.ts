import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, catchError, of, throwError } from 'rxjs';
import { AuthData } from 'src/app/shared/models/auth.service.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  login$?: Subscription;
  loginError = false;
  errorMessage?: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.login$?.unsubscribe();
  }

  onSubmit() {
    const val = this.loginForm.value;

    if (val.username && val.password) {
      this.login$ = this.authService.login(val.username, val.password)
        .pipe(
          catchError(err => {
            this.errorMessage = `Error occured! ${err.message}`;
            return throwError(() => err);
          })
        )
        .subscribe({
          next: (val: AuthData) => this.router.navigate(['']),
          error: (val: any) => this.loginError = true
        })
    } else {
      alert('Please provide login and password');
    }
  }

}

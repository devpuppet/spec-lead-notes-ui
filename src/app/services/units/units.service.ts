import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  private apiBaseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUnits() {
    return this.http.get(`${this.apiBaseUrl}/units`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Unit } from 'src/app/model/unit.model';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  private apiBaseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUnit(userId: string): Observable<Unit> {
    return this.http.get<Unit>(`${this.apiBaseUrl}/${userId}/unit`);
  }
}

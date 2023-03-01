import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Unit } from 'src/app/people/models/unit.model';

@Injectable()
export class UnitsService {

  private apiBaseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUnits(userId: string): Observable<Unit[]> {
    return this.http.get<Unit[]>(`${this.apiBaseUrl}/${userId}/units`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, of, switchMap } from 'rxjs';
import { ConfigService } from 'src/app/core/services/config.service';
import { Unit } from 'src/app/home/people/models/unit.model';

@Injectable()
export class UnitsService {

  private readonly apiBaseUrl;
  private history$ = new ReplaySubject();

  constructor(
    private http: HttpClient,
    private configService: ConfigService
    ) {
      this.apiBaseUrl = this.configService.getApiBaseUrl();
    }

  getUnits(userId: string): Observable<Unit[]> {
    return this.http.get<Unit[]>(`${this.apiBaseUrl}/${userId}/units`).pipe(
      switchMap(units => {
        this.history$.next(units);
        return of(units);
      })
    );
  }

  // Method uses ReplaySubject which emits 'historical' values for new subscribers
  // SummaryComponent uses it to display history of meeting entries count which is updated 
  // after every request sent to /units endpoint
  getHistoricalData(subscription: any) {
    return this.history$.asObservable().subscribe(subscription);
  }
}

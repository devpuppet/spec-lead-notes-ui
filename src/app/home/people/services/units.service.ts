import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/core/services/config.service';
import { Unit } from 'src/app/home/people/models/unit.model';

@Injectable()
export class UnitsService {

  private readonly apiBaseUrl;

  constructor(
    private http: HttpClient,
    private configService: ConfigService
    ) {
      this.apiBaseUrl = this.configService.getApiBaseUrl();
    }

  getUnits(userId: string): Observable<Unit[]> {
    return this.http.get<Unit[]>(`${this.apiBaseUrl}/${userId}/units`);
  }
}

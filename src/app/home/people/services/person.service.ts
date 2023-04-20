import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MeetingNotes } from '../models/meeting-notes.model';
import { ConfigService } from 'src/app/core/services/config.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private readonly apiBaseUrl;

  constructor(
    private http: HttpClient,
    private configService: ConfigService
    ) {
      this.apiBaseUrl = this.configService.getApiBaseUrl();
    }

  addMeetingNotes(unitId: string, meetingNotes: MeetingNotes): Observable<MeetingNotes> {
    return this.http.post<MeetingNotes>(`${this.apiBaseUrl}/person`, meetingNotes, {
      params: { unitId: unitId }
    })
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MeetingNotes } from '../models/meeting-notes.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiBaseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addMeetingNotes(unitId: string, meetingNotes: MeetingNotes) {
    this.http.post(`${this.apiBaseUrl}/person`, meetingNotes, {
      params: { unitId: unitId }
    })
  }

}

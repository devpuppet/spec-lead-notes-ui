import { Component, Input, OnInit } from '@angular/core';
import { MeetingNotes } from '../../models/meeting-notes.model';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  @Input()
  meetingData!: MeetingNotes;

  constructor() { }

  ngOnInit(): void {
  }

}

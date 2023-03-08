import { Component, Input, OnInit } from '@angular/core';
import { Meeting } from '../../models/unit.model';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  @Input()
  meetingData!: Meeting;

  constructor() { }

  ngOnInit(): void {
  }

}

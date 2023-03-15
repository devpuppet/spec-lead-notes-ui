import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './add-meeting-modal.component.html',
  styleUrls: ['./add-meeting-modal.component.css']
})
export class AddMeetingModalComponent implements OnInit {

  impactValues = ['Low', 'Medium', 'High'];

  constructor() { }

  ngOnInit(): void {
  }

}

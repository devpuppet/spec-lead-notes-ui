import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './add-meeting-modal.component.html',
  styleUrls: ['./add-meeting-modal.component.css']
})
export class AddMeetingModalComponent implements OnInit {

  impactValues = ['Low', 'Medium', 'High'];
  attritionRiskValues = ['No Risk', 'Low', 'Medium', 'High'];
  attritionReasons = [
    'Change of career track',
    'Compensation',
    'Dissatisfaction with management',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

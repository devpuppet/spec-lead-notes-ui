import { Component, OnInit } from '@angular/core';
import { AttritionRisk, MeetingNotes } from '../../models/meeting-notes.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { YesNoToBooleanMapper } from 'src/app/shared/mappers/yes-no.mapper';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-meeting',
  templateUrl: './edit-meeting.component.html',
  styleUrls: ['./edit-meeting.component.css']
})
export class EditMeetingComponent implements OnInit {

  meetingData!: MeetingNotes;
  meetingForm!: FormGroup;
  cdkAutosizeMinRows = 1;
  cdkAutosizeMaxRows = 4;
  attritionRiskValues = [
    AttritionRisk.NONE,
    AttritionRisk.LOW,
    AttritionRisk.MEDIUM,
    AttritionRisk.HIGH
  ];

  constructor(
    private formBuilder: FormBuilder,
    private yesNoMapper: YesNoToBooleanMapper,
    private location: Location) { }

  ngOnInit(): void {
    this.meetingData = history.state;
    this.meetingForm = this.formBuilder.group({
      comments: [this.meetingData.comments],
      questions: [this.meetingData.questions],
      managerActionItems: [this.meetingData.managerActionItems],
      subordinateActionItems: [this.meetingData.subordinateActionItems],
      importantAgreements: [this.meetingData.importantAgreements],
      satisfaction: [this.meetingData.satisfaction],
      plans: [this.meetingData.plans],
      feedback: [this.meetingData.feedback],
      issues: [this.meetingData.issues],
      attritionRisk: [this.meetingData.attritionRisk],
      oneToOneReportSent: [this.yesNoMapper.toModel(this.meetingData.oneToOneReportSent)]
    });
  }

  onSubmit() {
    // todo: implement
  }

  back() {
    this.location.back();
  }

}

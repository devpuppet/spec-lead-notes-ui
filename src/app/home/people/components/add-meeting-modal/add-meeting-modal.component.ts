import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { YesNoToBooleanMapper } from 'src/app/shared/mappers/yes-no.mapper';
import { AttritionRisk, MeetingNotes } from '../../models/meeting-notes.model';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-modal',
  templateUrl: './add-meeting-modal.component.html',
  styleUrls: ['./add-meeting-modal.component.css']
})
export class AddMeetingModalComponent {

  meetingForm: FormGroup;
  cdkAutosizeMinRows = 1;
  cdkAutosizeMaxRows = 4;
  attritionRiskValues = [
    AttritionRisk.NONE,
    AttritionRisk.LOW,
    AttritionRisk.MEDIUM,
    AttritionRisk.HIGH
  ];
  personData: { id: string, name: string }

  constructor(
    private formBuilder: FormBuilder,
    private personService: PersonService,
    @Optional() @Inject(MAT_DIALOG_DATA) private data: any,
    private yesNoMapper: YesNoToBooleanMapper
    ) {
    this.meetingForm = this.formBuilder.group({
      comments: [''],
      questions: [''],
      managerActionItems: [''],
      subordinateActionItems: [''],
      importantAgreements: [''],
      satisfaction: [''],
      plans: [''],
      feedback: [''],
      issues: [''],
      attritionRisk: [AttritionRisk.LOW],
      oneToOneReportSent: ['No']
    });
    this.personData = data;
  }

  get comments() {
    return this.meetingForm.get('comments')!.value;
  }

  get questions() {
    return this.meetingForm.get('questions')!.value;
  }

  get managerActionItems() {
    return this.meetingForm.get('managerActionItems')!.value;
  }

  get subordinateActionItems() {
    return this.meetingForm.get('subordinateActionItems')!.value;
  }

  get importantAgreements() {
    return this.meetingForm.get('importantAgreements')!.value;
  }

  get satisfaction() {
    return this.meetingForm.get('satisfaction')!.value;
  }

  get plans() {
    return this.meetingForm.get('plans')!.value;
  }

  get feedback() {
    return this.meetingForm.get('feedback')!.value;
  }

  get issues() {
    return this.meetingForm.get('issues')!.value;
  }

  get attritionRisk() {
    return this.meetingForm.get('attritionRisk')!.value;
  }

  get oneToOneReportSent() {
    return this.meetingForm.get('oneToOneReportSent')!.value;
  }

  onSubmit() {
    const meetingNotes: MeetingNotes = {
      personId: this.personData.id,
      comments: this.comments,
      questions: this.questions,
      managerActionItems: this.managerActionItems,
      subordinateActionItems: this.subordinateActionItems,
      importantAgreements: this.importantAgreements,
      satisfaction: this.satisfaction,
      plans: this.plans,
      feedback: this.feedback,
      issues: this.issues,
      attritionRisk: this.attritionRisk,
      oneToOneReportSent: this.yesNoMapper.toClient(this.oneToOneReportSent)
    }
    console.log(meetingNotes);
  }

}

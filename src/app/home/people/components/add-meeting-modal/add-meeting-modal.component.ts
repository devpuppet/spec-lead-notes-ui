import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  attritionRiskValues = [AttritionRisk.NONE, AttritionRisk.LOW, AttritionRisk.MEDIUM, AttritionRisk.HIGH];

  constructor(private formBuilder: FormBuilder, private personService: PersonService) {
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
      personId: "1",
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
      oneToOneReportSent: this.oneToOneReportSent
    }
    console.log(meetingNotes);
  }

}

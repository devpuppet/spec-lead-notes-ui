import { Component, Inject, OnDestroy, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { YesNoToBooleanMapper } from 'src/app/shared/mappers/yes-no.mapper';
import { AttritionRisk, MeetingNotes, YesNo } from '../../models/meeting-notes.model';
import { PersonService } from '../../services/person.service';
import * as moment from 'moment';

@Component({
  selector: 'app-modal',
  templateUrl: './add-meeting-modal.component.html',
  styleUrls: ['./add-meeting-modal.component.css']
})
export class AddMeetingModalComponent implements OnDestroy {

  private static readonly DATE_FORMAT = 'MM/DD/YYYY';
  meetingForm: FormGroup;
  cdkAutosizeMinRows = 1;
  cdkAutosizeMaxRows = 4;
  attritionRiskValues = [
    AttritionRisk.NONE,
    AttritionRisk.LOW,
    AttritionRisk.MEDIUM,
    AttritionRisk.HIGH
  ];
  addMeetingNotes$?: Subscription;

  constructor(
    private dialogRef: MatDialogRef<AddMeetingModalComponent>,
    private formBuilder: FormBuilder,
    private personService: PersonService,
    private yesNoMapper: YesNoToBooleanMapper,
    @Optional() @Inject(MAT_DIALOG_DATA) protected personData: { id: string, name: string, unitId: string }
    ) {
    this.meetingForm = this.formBuilder.group({
      date: ['', [Validators.required]],
      comments: [''],
      questions: [''],
      managerActionItems: [''],
      subordinateActionItems: [''],
      importantAgreements: [''],
      satisfaction: [''],
      plans: [''],
      feedback: [''],
      issues: [''],
      attritionRisk: [AttritionRisk.NONE],
      oneToOneReportSent: [YesNo.NO]
    });
  }

  ngOnDestroy(): void {
    this.addMeetingNotes$?.unsubscribe();
  }

  get date() {
    const date: moment.Moment = this.meetingForm.get('date')!.value.date;
    return date.format(AddMeetingModalComponent.DATE_FORMAT);
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
      date: this.date,
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

    this.addMeetingNotes$ = this.personService.addMeetingNotes(this.personData.unitId, meetingNotes)
      .subscribe(response => this.dialogRef.close({ meetingNotes }));
  }

}

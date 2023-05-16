import { Component, OnInit } from '@angular/core';
import { AttritionRisk, MeetingNotes } from '../../models/meeting-notes.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { YesNoToBooleanMapper } from 'src/app/shared/mappers/yes-no.mapper';
import { Location } from '@angular/common';
import { debounceTime, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUserId } from 'src/app/login/store/login.selectors';
import { UnitsService } from 'src/app/home/services/units.service';

@Component({
  selector: 'app-edit-meeting',
  templateUrl: './edit-meeting.component.html',
  styleUrls: ['./edit-meeting.component.css']
})
export class EditMeetingComponent implements OnInit {

  meetingData!: MeetingNotes;
  notesId?: string;
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
    private location: Location,
    private store: Store,
    private unitsService: UnitsService) { }

  ngOnInit(): void {
    this.meetingData = history.state;
    this.notesId = this.meetingData.notesId;
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

    let userId: string | undefined;
    this.store.select(selectUserId)
      .subscribe(value => userId = value);

    if (!userId) {
      throw new Error('userId not found in Store');
    }

    // Below subscription to valueChanges event was implemented to exercise switchMap operator
    // Behavior in UI: when user edits Comments form field, request is sent to fetch data from BE 
    // and update Questions form field if no other Observable is emitted from valueChanges for 2 seconds
    this.comments.valueChanges
      .pipe(
        debounceTime(2000),
        switchMap(() => this.unitsService.getUnits(userId!))
      )
      .subscribe(units => {
        const meetingData = units
          .flatMap(unit => unit.people)
          .flatMap(person => person.meetings)
          .find(meeting => meeting.notesId === this.notesId)!;

        setTimeout(() => {
          this.questions.setValue(meetingData.questions);
        })
      }
      );
  }

  get comments() {
    return this.meetingForm.get('comments')!;
  }

  get questions() {
    return this.meetingForm.get('questions')!;
  }

  onSubmit() {
    // todo: implement
  }

  back() {
    this.location.back();
  }

}

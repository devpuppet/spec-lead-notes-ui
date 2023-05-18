import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MeetingNotes } from 'src/app/home/people/models/meeting-notes.model';
import { Unit } from 'src/app/home/people/models/unit.model';
import { UnitsService } from 'src/app/home/services/units.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, OnDestroy {

  units$?: Subscription;
  meetings: MeetingNotes[] = [];
  history: MeetingHistory[] = [];

  constructor(private readonly unitsService: UnitsService, private datePipe: DatePipe) { }

  ngOnDestroy(): void {
    this.units$?.unsubscribe();
  }

  ngOnInit(): void {
    this.units$ = this.unitsService.getHistoricalData(
      (units: Unit[]) => {
        this.history.push({
          meetings: units
          .flatMap(unit => unit.people)
          .flatMap(person => person.meetings)
        });
      }
    );
  }
}

export interface MeetingHistory {
  meetings: MeetingNotes[];
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, of } from 'rxjs';
import { Unit } from 'src/app/home/people/models/unit.model';
import { ModalService } from '../../services/modal.service';

import { Store } from '@ngrx/store';
import { selectUserId } from 'src/app/login/store/login.selectors';
import { UnitsService } from 'src/app/home/services/units.service';
import { AttritionRisk } from '../../models/meeting-notes.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit, OnDestroy {

  $units!: Subscription;
  units: Unit[] = [];
  $userId?: Subscription;

  constructor(
    private readonly unitsService: UnitsService,
    private modalService: ModalService,
    private store: Store
  ) { }

  ngOnInit(): void {
    let userId: string | undefined;
    this.$userId = this.store.select(selectUserId)
      .subscribe(value => userId = value);

    if (!userId) {
      throw new Error('userId not found in Store');
    }

    this.$units = this.unitsService.getUnits(userId)
      .subscribe(units => this.units.push(...units));
    this.modalService.subscribe({
      afterClosed: data => {
        userId && data ?
          this.unitsService.getUnits(userId).subscribe(units => this.units = units) :
          of([...this.units]).subscribe(units => this.units = units)
      }
    })
  }

  ngOnDestroy(): void {
    this.$userId?.unsubscribe();
    this.$units.unsubscribe();
  }

  // When method is invoked in the template, it creates a new array with old units and adds one new unit.
  // UnitComponents which hold multiple PersonComponents have ChangeDetectionStrategy.OnPush
  // When 'Add new Unit' button is clicked, change detection is run only for new component and not for existing components.
  // So instead of running change detection multiple times, Angular runs it only once for better performance.
  addNewUnit() {
    this.units = [...this.units, this.newUnit];
  }

  get newUnit() {
    return {
      id: `${Date.now()}`,
      name: `Name ${Date.now()}`,
      people: [
        {
          id: `${Date.now()}`,
          name: `Person ${Date.now()}`,
          grade: 'T9000',
          specializations: ['Everything'],
          location: 'everywhere',
          meetings: [
            {
              date: new Date().toString(),
              personId: '',
              notesId: '',
              comments: '',
              questions: '',
              managerActionItems: '',
              subordinateActionItems: '',
              importantAgreements: '',
              satisfaction: '',
              plans: '',
              feedback: '',
              issues: '',
              attritionRisk: AttritionRisk.HIGH,
              oneToOneReportSent: false
            }
          ]
        }
      ]
    };
  }
}

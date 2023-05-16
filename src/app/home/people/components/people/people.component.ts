import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { Unit } from 'src/app/home/people/models/unit.model';
import { ModalService } from '../../services/modal.service';

import { Store } from '@ngrx/store';
import { selectUserId } from 'src/app/login/store/login.selectors';
import { UnitsService } from 'src/app/home/services/units.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit, OnDestroy {

  $units!: Observable<Unit[]>;
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

    this.$units = this.unitsService.getUnits(userId);
    this.modalService.subscribe({
      afterClosed: data => this.$units = userId ? this.unitsService.getUnits(userId) : of([])
    })
  }

  ngOnDestroy(): void {
    this.$userId?.unsubscribe();
  }

}

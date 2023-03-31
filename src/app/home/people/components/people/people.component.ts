import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Unit } from 'src/app/home/people/models/unit.model';
import { ModalService } from '../../services/modal.service';
import { UnitsService } from '../../services/units.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  $units!: Observable<Unit[]>;

  constructor(private readonly unitsService: UnitsService, private modalService: ModalService) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      throw new Error('userId not found in localStorage');
    }

    this.$units = this.unitsService.getUnits(userId);
    this.modalService.subscribe({
      afterClosed: data => this.$units = this.unitsService.getUnits(userId)
    })
  }

}

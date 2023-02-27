import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Unit } from 'src/app/model/unit.model';
import { UnitsService } from 'src/app/services/units/units.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  $units!: Observable<Unit[]>;

  constructor(private readonly unitsService: UnitsService) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      throw new Error('userId not found in localStorage');
    }

    this.$units = this.unitsService.getUnits(userId);
  }

}

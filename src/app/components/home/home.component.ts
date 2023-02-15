import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Unit } from 'src/app/model/unit.model';
import { UnitsService } from 'src/app/services/units/units.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  $unit!: Observable<Unit>;

  constructor(private unitsService: UnitsService) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      throw new Error('userId not found in localStorage');
    }

    this.$unit = this.unitsService.getUnit(userId);
  }

}

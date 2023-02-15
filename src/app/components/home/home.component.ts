import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitsService } from 'src/app/services/units/units.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  $units!: Observable<any>

  constructor(private unitsService: UnitsService) { }

  ngOnInit(): void {
    this.$units = this.unitsService.getUnits();
  }

}

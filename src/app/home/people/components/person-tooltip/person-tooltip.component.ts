import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../models/unit.model';

@Component({
  selector: 'app-person-tooltip',
  templateUrl: './person-tooltip.component.html',
  styleUrls: ['./person-tooltip.component.css']
})
export class PersonTooltipComponent implements OnInit {

  @Input()
  personData!: Person;
  left = 0;
  top = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../models/unit.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input()
  personData!: Person;

  constructor() { }

  ngOnInit(): void {
  }

}

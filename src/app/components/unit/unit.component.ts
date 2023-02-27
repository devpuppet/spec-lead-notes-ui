import { Component, Input, OnInit } from '@angular/core';
import { Unit } from 'src/app/model/unit.model';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  @Input() unitData!: Unit;

  constructor() { }

  ngOnInit(): void {
  }

}

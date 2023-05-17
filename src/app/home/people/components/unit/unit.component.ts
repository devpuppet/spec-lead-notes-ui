import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Unit } from 'src/app/home/people/models/unit.model';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnitComponent implements OnInit {

  @Input() unitData!: Unit;

  constructor() { }

  ngOnInit(): void {
  }

}

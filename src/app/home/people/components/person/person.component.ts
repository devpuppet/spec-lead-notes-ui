import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMeetingModalComponent } from 'src/app/home/people/components/add-meeting-modal/add-meeting-modal.component';
import { Person } from '../../models/unit.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input()
  personData!: Person;
  @Input()
  unitId!: string;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddMeetingModal() {
    const addMeetingModal = this.dialog.open(AddMeetingModalComponent, {
      data: { id: this.personData.id, name: this.personData.name, unitId: this.unitId }
    });

    addMeetingModal.afterClosed().subscribe(data => {
      console.log('Data from Modal', data);
    })
  }

}

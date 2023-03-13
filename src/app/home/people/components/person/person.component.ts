import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/ng-material/modal/modal.component';
import { Person } from '../../models/unit.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input()
  personData!: Person;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddMeetingModal() {
    const addMeetingModal = this.dialog.open(ModalComponent);

    addMeetingModal.afterClosed().subscribe(data => {
      console.log('Data from Modal', data);
    })
  }

}

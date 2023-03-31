import { Component, Input, OnInit } from '@angular/core';
import { AddMeetingModalComponent } from 'src/app/home/people/components/add-meeting-modal/add-meeting-modal.component';
import { Person } from '../../models/unit.model';
import { ModalService } from '../../services/modal.service';

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

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openAddMeetingModal() {
    this.modalService
    .open(AddMeetingModalComponent, {
      data: { id: this.personData.id, name: this.personData.name, unitId: this.unitId }
    })
    .subscribe({ 
      afterClosed: data => console.log('Data from Modal', data)
    });
  }

}

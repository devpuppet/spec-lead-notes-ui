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

  pagination: Pagination = {
    config: {
      itemsOnPage: 3,
      currentPageIndex: 0,
    },
    pages: []
  }

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.initializePagination();
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

  updatePageNumber(index: number) {
    this.pagination.config.currentPageIndex = +index;
  }

  private initializePagination() {
    let pageIndex = 0;
    this.pagination.pages.push({ data: [] });
    for (let i = 0; i < this.personData.meetings.length; i++) {
      this.pagination.pages[pageIndex].data.push(this.personData.meetings[i]);
      if (this.isEndOfPage(i, pageIndex) && this.hasMoreData(i, this.personData.meetings)) {
        pageIndex++;
        this.pagination.pages.push({ data: [] });
      }
    }
  }

  isEndOfPage(i: number, pageIndex: number) {
    return i >= (this.pagination.config.itemsOnPage - 1) + pageIndex * this.pagination.config.itemsOnPage;
  }

  hasMoreData(i: number, data: any[]) {
    return data.length > i + 1;
  }
}

export interface Pagination {
  config: PaginationConfig,
  pages: Page[]
}

export interface PaginationConfig {
  itemsOnPage: number,
  currentPageIndex: number,
}

export interface Page {
  data: any[]
}
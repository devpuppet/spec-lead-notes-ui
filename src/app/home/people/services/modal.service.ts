import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private matDialogRef?: MatDialogRef<any, any>;
  private subscribers: Subscriber[] = [];

  constructor(private dialog: MatDialog) { }

  open(modalComponent: any, data: any): ModalService {
    this.matDialogRef = this.dialog.open(modalComponent, data);
    return this;
  }

  afterClosed() {
    this.matDialogRef ?
      this.matDialogRef.afterClosed().subscribe(
        (data) => this.subscribers.forEach(subscriber => subscriber.afterClosed(data)))
      : of();
  }

  subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
    this.afterClosed();
  }
}

export interface Subscriber {
  afterClosed: (input: any) => any;
}
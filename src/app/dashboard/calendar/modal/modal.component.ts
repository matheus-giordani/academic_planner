import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent } from 'angular-calendar';

@Component({
	selector: 'ngbd-modal-content',
	templateUrl:'./modal.component.html' ,
})
export class NgbdModalContent implements OnInit {
	calendarEvents: CalendarEvent[];
  dayClicked: Date


	constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(){
    console.log(this.dayClicked.getDate())

  }
}

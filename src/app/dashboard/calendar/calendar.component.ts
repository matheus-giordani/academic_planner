import {
  Component,
  ChangeDetectionStrategy,

  OnInit,
  Input,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { startOfDay } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbdModalContent } from './modal/modal.component';


@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})



export class CalendarComponent implements OnInit {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  events: CalendarEvent[] = [
    {
      start: new Date("2022-10-25T13:30:00.000Z"),
      end: new Date("2022-10-25T14:00:00.000Z"),
      title: "The Huxley - Lista 01",
      color: {
        primary: "#ad2121",
        secondary: "#FAE3E3"
      },
      actions: [
        {
          label: "<i class=\"fas fa-fw fa-pencil-alt\"></i>",
          a11yLabel: "Edit",
          onClick({ event, sourceEvent, }) {

          },
        },
        {
          label: "<i class=\"fas fa-fw fa-trash-alt\"></i>",
          a11yLabel: "Delete",
          onClick({ event, sourceEvent, }) {

          },
        }
      ],
      resizable: {
        "beforeStart": true,
        "afterEnd": true
      },
      draggable: true
    },
    {
      start: startOfDay(new Date()),
      title: 'Vetores',
      resizable: {
        "beforeStart": true,
        "afterEnd": true
      },
      draggable: true
    },
    {
      start: startOfDay(new Date()),
      title: 'Modelagem de dados',
      resizable: {
        "beforeStart": true,
        "afterEnd": true
      },
      draggable: true
    },
  ]
  constructor(protected modalService: NgbModal) { }



  ngOnInit() {
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date, events);
    this.open(date, events)



  }

  open(date: Date, events: CalendarEvent[]) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.dayClicked = date;
    modalRef.componentInstance.calendarEvents = events
  }

  refresh = new Subject<void>();

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
    console.log(event)
  }


}

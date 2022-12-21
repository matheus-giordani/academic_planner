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
import { colors } from './colors';


@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})



export class CalendarComponent implements OnInit {
  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();
  CalendarView = CalendarView;

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      end: startOfDay(new Date()),
      title: "The Huxley - Lista 01",
      color: colors.yellow,
      actions: [
        {
          label: "<i class=\"fas fa-fw fa-pencil-alt\"></i>",
          a11yLabel: "Edit",
          onClick({ event, sourceEvent, }) {
            console.log(event,sourceEvent)

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
        "beforeStart": false,
        "afterEnd": false
      },
      draggable: false,
      color: colors.red
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

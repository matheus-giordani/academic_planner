import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
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
import { CalendarService } from './calendar.service';


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

  events: CalendarEvent[]
  constructor(protected modalService: NgbModal, private calendarService: CalendarService,private spiner: NgxSpinnerService) { }



  ngOnInit() {
    this.spiner.show()
    this.getRevisao()
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


  getRevisao(){
    this.calendarService.getRevisao().subscribe({
      next: (res)=>{
        this.events = res.map(el=>{
          const event: CalendarEvent ={
            start: startOfDay(new Date(el.date)),
            title: el.topic_name,
            resizable: {
              "beforeStart": false,
              "afterEnd": false
            },
            draggable: false,
            color: colors.red
          }
          return event
        })

      },
      complete: ()=>{
        console.log(this.events)
        this.refresh.next()
        this.spiner.hide()
      }
    })
  }


}

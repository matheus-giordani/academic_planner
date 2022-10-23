import {
  Component,
  ChangeDetectionStrategy,

  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }




}

import { Component, OnInit } from '@angular/core';
import { CalendarOptions, defineFullCalendarElement } from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';
import { LoginService } from '../login/login/login.service';

defineFullCalendarElement();
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: LoginService) { }


  ngOnInit(): void {

  }

  logout(){
    this.auth.logout()
  }

}

import { Component, OnInit } from '@angular/core';


import { LoginService } from '../login/login/login.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: LoginService) { }


  ngOnInit(): void {

  }

  logout() {
    this.auth.logout()
  }

}

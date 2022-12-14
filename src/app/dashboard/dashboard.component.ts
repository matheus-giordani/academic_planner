import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


import { LoginService } from '../login/login/login.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: LoginService, private router: Router,private httpClient:HttpClient) { }



  baseUrl = 'https://academic-planner-api.herokuapp.com/'

  ngOnInit(): void {
    this.httpClient.get(this.baseUrl + 'subjects').subscribe(res =>{
      console.log(res)
    })}

    logout() {
      this.auth.logout()
    }
}

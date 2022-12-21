import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DisciplinaService } from '../disciplina-form/disciplina.service';
import { DisciplinaAssuntos } from '../disciplina-form/disciplina.interface';



@Component({
  selector: 'app-disciplina-card',
  templateUrl: './disciplina-card.component.html',
  styleUrls: ['./disciplina-card.component.scss']
})




export class DisciplinaCardComponent implements OnDestroy, OnInit {


  // fakeData
  disciplinaObject: DisciplinaAssuntos
  routerEvent: any




  constructor(private activatedRoute: ActivatedRoute, private router: Router, private disciplinaService: DisciplinaService,private spinner: NgxSpinnerService) {

  }
  ngOnDestroy(): void {
    this.routerEvent.unsubscribe()
  }
  protected disciplinaId: number
  ngOnInit(): void {
    this.spinner.show()
    this.routerEvent =  this.activatedRoute.params.subscribe(idParam => {

      this.disciplinaService.getDisciplinaAssunto(idParam['id']).subscribe({
        next: (res)=>{
          this.disciplinaObject = res

        },
        complete: ()=>{this.spinner.hide()}
      })


    })

  }





}


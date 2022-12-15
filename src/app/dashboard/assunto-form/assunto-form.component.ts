import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AssuntoService } from './assunto.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-assunto-form',
  templateUrl: './assunto-form.component.html',
  styleUrls: ['./assunto-form.component.scss']
})
export class AssuntoFormComponent implements OnInit {
  listaDisciplinas:{id_disciplina:number, name:string}[] = []

  constructor(private toast: ToastrService, private spinner: NgxSpinnerService, private assuntoService: AssuntoService) { }

  ngOnInit(): void {
   this.spinner.show()
    this.getDisciplina()
  }

  getDisciplina(){

    this.assuntoService.getDisciplinas().subscribe({
      next: (res) =>{
        res.forEach((el: { id: number; name: string; }) => {
          const disciplina = {id_disciplina: el.id, name:el.name}
          this.listaDisciplinas.push(disciplina)


        });


      },
      error: (err) =>{
        console.log(err)
      },
      complete: ()=>{

          this.spinner.hide();

      }


    })

  }

}

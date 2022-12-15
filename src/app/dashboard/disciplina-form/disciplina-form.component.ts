import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { DisciplinaService } from './disciplina.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-disciplina-form',
  templateUrl: './disciplina-form.component.html',
  styleUrls: ['./disciplina-form.component.scss']
})
export class DisciplinaFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private toast:ToastrService, private disciplinaService:DisciplinaService) { }

  public formDisciplina: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required]],
    start_date: [null, [Validators.required]],
    end_date: [null, [Validators.required]],
    shift: [null, [Validators.required]]
  });



  ngOnInit(): void {
  }


  submit(){
    if(this.stringForDate(this.formDisciplina.value.start_date) >= this.stringForDate(this.formDisciplina.value.end_date) ){
      this.toast.error('data de inicio deve ser menor que a data de termino', 'erro')
      return
    }
    console.log(this.formDisciplina.value)
    this.disciplinaService.cadastraDisciplina(this.formDisciplina.value).subscribe({
      next: (value) =>{
        this.toast.success('Disciplina Cadastrada', 'Sucesso')
        this.formDisciplina.reset()
      },
      error: (e: HttpErrorResponse) => {
        console.log(e);
        const erros: { errors: string[] } = e.error;
        erros.errors.forEach((value,index) => {
            this.toast.error(value, 'Error', {
            closeButton: true,
            timeOut: ((index+1)*3000)/2
          });
        });
      },
    }


    )


  }

  stringForDate(stringDate:string): Date{
    const doo = new Date(stringDate)
    return new Date( doo.getTime() - doo.getTimezoneOffset() * -60000 )


  }

}

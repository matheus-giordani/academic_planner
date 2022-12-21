import { ToastrService } from 'ngx-toastr';
import { Component, Input, OnInit } from '@angular/core';
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
  @Input() id: number;
  buttonName: string;

  constructor(private formBuilder: FormBuilder,private toast:ToastrService, private disciplinaService:DisciplinaService) { }

  public formDisciplina: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required]],
    start_date: [null, [Validators.required]],
    end_date: [null, [Validators.required]],
    shift: [null, [Validators.required]]
  });



  ngOnInit(): void {
    this.buttonName =  this.id? 'Editar assunto' : 'Cadastrar assunto'
    console.log(this.id)
    if(this.id){
      this.atualizaForm()
    }
  }

  atualizaForm(){
    this.disciplinaService.getDisciplinaId(this.id).subscribe({
      next: (res) =>{
        console.log(res)
        this.formDisciplina.get('name')?.patchValue(res.name)

        this.formDisciplina.get('start_date')?.patchValue(res.start_date.split('T')[0])
        this.formDisciplina.get('end_date')?.patchValue(res.end_date.split('T')[0])
        this.formDisciplina.get('shift')?.patchValue(res.shift)


      }
    })

  }


  submit(){
    if(this.stringForDate(this.formDisciplina.value.start_date) >= this.stringForDate(this.formDisciplina.value.end_date) ){
      this.toast.error('data de inicio deve ser menor que a data de termino', 'erro')
      return
    }
    console.log(this.formDisciplina.value)

    if(this.id){

      this.disciplinaService.patchDisciplina(this.id,this.formDisciplina.value).subscribe({
        complete: ()=>{
          this.toast.success('Disciplina Editada', 'Sucess',{
            positionClass:'toast-bottom-right'
          })
          window.location.reload();

        }
      })


    }else{

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





  }

  stringForDate(stringDate:string): Date{
    const doo = new Date(stringDate)
    return new Date( doo.getTime() - doo.getTimezoneOffset() * -60000 )


  }

}

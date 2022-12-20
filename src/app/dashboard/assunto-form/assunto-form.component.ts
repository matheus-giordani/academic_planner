import { ToastrService } from 'ngx-toastr';
import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AssuntoService } from './assunto.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as React from 'preact/compat';
import { DisciplinaService } from '../disciplina-form/disciplina.service';

@Component({
  selector: 'app-assunto-form',
  templateUrl: './assunto-form.component.html',
  styleUrls: ['./assunto-form.component.scss'],
})
export class AssuntoFormComponent implements OnInit {
  listaDisciplinas: { id_disciplina: number; name: string }[] = [];
  @Input() id: number;
  buttonName: string;

  constructor(
    private toast: ToastrService,
    private spinner: NgxSpinnerService,
    private assuntoService: AssuntoService,
    private disciplinaService: DisciplinaService,
    private formBuilder: FormBuilder
  ) {}
  public formAssunto: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required]],
    subject_id: [null],
    study_hours: [null, [Validators.required]],
    user_id: localStorage.getItem('user_id'),
  });

  ngOnInit(): void {
    this.spinner.show();
   this.buttonName =  this.id? 'Editar assunto' : 'Cadastrar assunto'

    this.getDisciplina();

    console.log(this.id);
  }

  getDisciplina() {
    this.disciplinaService.getDisciplinas().subscribe({
      next: (res) => {
        console.log('entrou');
        res.forEach((el: { id: number; name: string }) => {
          const disciplina = { id_disciplina: el.id, name: el.name };
          this.listaDisciplinas.push(disciplina);
        });
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        if (this.id) {
          this.getAssunto();
        }

        this.spinner.hide();
      },
    });
  }

  convertId(id: any) {
    if (id) {
      return +id;
    }
    return;
  }

  submit() {
    const body = {
      name: this.formAssunto.controls['name'].value,
      study_hours: this.formAssunto.controls['study_hours'].value,
      subject_id: +this.formAssunto.controls['subject_id'].value,
      user_id: this.convertId(localStorage.getItem('user_id')),
    };
    if(this.id){
      this.assuntoService.patchAssunto(body, this.id).subscribe({
        next: (res) => {

          this.toast.success('Assunto Editado', 'Sucesso');
          window.location.reload();

        },
        error: (err) => {
          console.log(err);
        },
      })


    }
    else{
      this.assuntoService.postAssunto(body).subscribe({
        next: (res) => {
          console.log(res);
          this.toast.success('Assunto cadastrado', 'Sucesso');
        },
        error: (err) => {
          console.log(err);
        },
      });
    }

  }

  getAssunto() {
    this.assuntoService.getAssunto(this.id).subscribe({
      next: (res) => {
        this.formAssunto.get('name')?.patchValue(res.name);
        this.formAssunto.get('study_hours')?.patchValue(res.study_hours);

        const valueDisciplina = this.listaDisciplinas.find(
          (el) => el.id_disciplina == res.subject_id
        );
        this.formAssunto
          .get('subject_id')
          ?.patchValue(valueDisciplina?.id_disciplina);
      },
    });
  }
}

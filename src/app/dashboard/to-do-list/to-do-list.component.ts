import { NgxSpinnerService } from 'ngx-spinner';

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DisciplinaService } from '../disciplina-form/disciplina.service';
import { ModalTodoComponent } from './modal-todo/modal-todo.component';
import { DisciplinaAssuntos } from '../disciplina-form/disciplina.interface';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  disciplinasAssuntos: DisciplinaAssuntos[] = [];

  constructor(private disciplinaService:DisciplinaService ,private spinner: NgxSpinnerService,protected modalService: NgbModal) {}

  ngOnInit(): void {
    this.spinner.show()
    this.disciplinaService.getDisciplinasAssuntos().subscribe({
      next: (res) =>{
        console.log(res)
        this.disciplinasAssuntos = res


      },
      complete: () =>{
        this.spinner.hide()
      }



    })


  }

  open() {
    const modalRef = this.modalService.open(ModalTodoComponent);


  }
}

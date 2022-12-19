import { NgxSpinnerService } from 'ngx-spinner';
import { Disciplina } from './../disciplina-form/disciplina.interface';

import { AssuntoService } from './../assunto-form/assunto.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTodoComponent } from './modal-todo/modal-todo.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  disciplinas: { id: number; name: string; shift: string }[] = [];

  constructor(private disciplina: AssuntoService,private spinner: NgxSpinnerService,protected modalService: NgbModal) {}

  ngOnInit(): void {
    this.spinner.show()

    this.disciplina.getDisciplinas().subscribe({
      next: (value) => {

        value.forEach((el: { id: any; name: any; shift: any; }) => {
          const data:{ id: number; name: string; shift: string } = {
            id: el.id,
            name: el.name,
            shift: el.shift
          }
          this.disciplinas.push(data)


        });
      },
      complete: () => {
        console.log(this.disciplinas)
        this.spinner.hide()

      }
    });
  }

  open() {
    const modalRef = this.modalService.open(ModalTodoComponent);
    

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-todo',
  templateUrl: './modal-todo.component.html',
})
export class ModalTodoComponent implements OnInit {
  idAssunto: number
  display: boolean = false;


  constructor() {}

  ngOnInit(): void {}

  showDialog(id: number) {
    this.idAssunto = id
    this.display = true;
  }

  hideDialog() {
    this.display = false;
  }
}

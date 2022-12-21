import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-edit-disciplina',
  templateUrl: './modal-edit.component.html',
})
export class ModalEditDisciplinaComponent implements OnInit {
  idDisciplina: number;
  display: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showDialog(id: number) {
    this.idDisciplina = id;
    this.display = true;
  }

  hideDialog() {
    this.display = false;
  }
}

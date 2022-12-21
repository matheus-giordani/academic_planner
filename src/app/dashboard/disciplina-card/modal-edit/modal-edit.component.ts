import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
})
export class ModalEditComponent implements OnInit {
  idDisciplina: number
  display: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDialog(id: number) {
    this.idDisciplina = id
    this.display = true;
  }

  hideDialog() {
    this.display = false;
  }

}

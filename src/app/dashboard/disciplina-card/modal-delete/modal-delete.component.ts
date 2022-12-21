import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../../disciplina-form/disciplina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-delete-disciplina',
  templateUrl: './modal-delete.component.html',
})
export class ModalDeleteDisciplinaComponent implements OnInit {

  idDisciplina: number
  display: boolean = false;

  constructor(private disciplinaService: DisciplinaService, private route:Router ) { }

  ngOnInit(): void {
  }

  showDialog(id: number) {
    this.idDisciplina = id
    this.display = true;
  }

  hideDialog() {
    this.display = false;
  }

  deleteDisciplina(){
    this.disciplinaService.deleteDisciplina(this.idDisciplina).subscribe({
      complete: ()=>{
        this.hideDialog()
        this.disciplinaService.getDisciplinas().subscribe()
        this.route.navigate(['dashboard'])





      }
    })

  }



}

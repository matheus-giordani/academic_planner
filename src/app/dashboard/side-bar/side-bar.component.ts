import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { DisciplinaService } from '../disciplina-form/disciplina.service';

export interface SideBarDisciplina {
  id:string,
  label: string,
  icon: string,
  styleClass: string,
  routerLink: (string | number)[],

}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  constructor(private router: Router, public disciplinaService: DisciplinaService) { }

  items: MenuItem[];
  disciplinas: MenuItem[];
  teste: MenuItem[];


  ngOnInit() {
    this.disciplinaService.sideBarDisciplinas.subscribe(el=>{
      this.items = [
        {
          label: 'Meu Calendário',
          icon: 'pi pi-fw pi-calendar',
          routerLink: ['']
        },
        {
          label: 'Inserir Disciplina',
          icon: 'pi pi-fw pi-book',
          styleClass: 'mt-3',
          routerLink: ['disciplina']
        },
        {
          label: 'Adicionar Assunto',
          icon: 'pi pi-fw pi-bookmark',
          styleClass: 'mt-3',
          routerLink: ['assunto']
        },
        {
          label: 'ToDo List',
          icon: 'pi pi-fw pi-check-square',
          styleClass: 'mt-3',
          routerLink: ['ToDo']
        },
        {
          label: 'Disciplinas',
          icon: 'pi pi-fw pi-check-square',
          styleClass: 'mt-3 ',
          style: {"min-height":"63vh" },
          items: el ,
        },
        { separator: true },
        {
          label: "Aluno",
          icon: "pi pi-fw pi-user",
          routerLink: ['user']
        }
      ];


    })





  }



  insereDisciplina(idDisciplina: string = '1', nomeDisciplina: string = 'calculo 2') {

    const newDisciplina = {

      label: nomeDisciplina,
      icon: 'pi pi-fw pi-bars',
      styleClass: 'mt-3',
      routerLink: ['disciplina', idDisciplina]
    };
    this.disciplinas.push(newDisciplina)




  }
}

import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  constructor(private router: Router) { }

  items: MenuItem[];
  disciplinas: MenuItem[];
  teste: MenuItem[];


  ngOnInit() {


    this.disciplinas = [
      {
        label: 'Programação 1',
        icon: 'pi pi-fw pi-bars',
        styleClass: 'mt-3',
      },
      {
        id: '1',
        label: 'Álgebra Linear',
        icon: 'pi pi-fw pi-bars',
        styleClass: 'mt-3',

      },
      {
        label: 'Banco de Dados',
        icon: 'pi pi-fw pi-bars',
        styleClass: 'mt-3',
      },
    ];

    this.items = [
      {
        label: 'Meu Calendário',
        icon: 'pi pi-fw pi-calendar',
        routerLink: ['calendario']
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
        styleClass: '',
        routerLink: ['ToDo']
      },
      {
        label: 'Disciplinas',
        icon: 'pi pi-fw pi-check-square',
        styleClass: 'mt-3 ',
        style: {"min-height":"50vh" },
        items: this.disciplinas,
      },
      { separator: true },
      {
        label: "Aluno",
        icon: "pi pi-fw pi-user",
        routerLink: ['user']
      }
    ];

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

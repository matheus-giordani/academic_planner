import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  constructor() {}

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
      },
      {
        label: 'Inserir Disciplina',
        icon: 'pi pi-fw pi-book',
        styleClass: 'mt-3',
      },
      {
        label: 'Adicionar Assunto',
        icon: 'pi pi-fw pi-bookmark',
        styleClass: 'mt-3',
      },
      {
        label: 'ToDo List',
        icon: 'pi pi-fw pi-check-square',
        styleClass: 'mt-3',
      },
      {
        label: 'Disciplinas',
        icon: 'pi pi-fw pi-check-square',
        styleClass: 'mt-3 ',
        style: {"min-height":"100vh" },
        items: this.disciplinas,
      },
      {separator:true},
      {
        label:"Aluno",
        icon: "pi pi-fw pi-user"
    }
    ];

  }
}

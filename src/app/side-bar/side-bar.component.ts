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
  desciplinas: MenuItem[];
  teste: MenuItem[];

  ngOnInit() {
    this.desciplinas = [
      {
        label: 'Programação 1',
        icon: 'pi pi-fw pi-bars',
        styleClass: 'mt-3',
      },
      {
        label: 'Algebra Linear',
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
        label: 'Meu Calendario',
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
        label: 'Desciplinas',
        icon: 'pi pi-fw pi-check-square',
        styleClass: 'mt-3 ',
        style: {"min-height":"100vh" },
        items: this.desciplinas,
      },
      {separator:true},
      {
        label:"Aluno",
        icon: "pi pi-fw pi-user"
    }
    ];

  }
}

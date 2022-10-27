import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { id } from 'date-fns/locale';



@Component({
  selector: 'app-disciplina-card',
  templateUrl: './disciplina-card.component.html',
  styleUrls: ['./disciplina-card.component.scss']
})




export class DisciplinaCardComponent implements OnInit {

  fakeData = [
    {
      id: 1,
      materia: 'Programação 1',
      assuntos: [
        {
          idAssunto: 1,
          nomeAssunto: 'The Huxley - Lista 01'
        },
        {
          idAssunto: 2,
          nomeAssunto: 'The Huxley - Lista 02'
        },
        {
          idAssunto: 3,
          nomeAssunto: 'The Huxley - Lista 03'
        },


      ]


    },
    {
      id: 2,
      materia: 'Álgebra linear',
      assuntos: [
        {
          idAssunto: 1,
          nomeAssunto: 'Vetores'
        },
        {
          idAssunto: 2,
          nomeAssunto: 'Espaço Vetorial'
        },
        {
          idAssunto: 3,
          nomeAssunto: 'Espaço Vetorial - Lista 02'
        },


      ]


    },
    {
      id: 3,
      materia: 'Banco de Dados',
      assuntos: [
        {
          idAssunto: 1,
          nomeAssunto: 'Modelagem de Dados'
        },
        {
          idAssunto: 2,
          nomeAssunto: 'SGBD'
        },
        {
          idAssunto: 3,
          nomeAssunto: 'SQL'
        },

      ]


    }

  ]
  disciplina: any
  id: string
  materia: string
  assuntos: any



  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    router.events.subscribe(event => {
      this.disciplinaId = this.activatedRoute.snapshot.params["id"]
      this.disciplina = this.fakeData.find(element => element.id == this.disciplinaId);
      this.materia = this.disciplina.materia
      this.assuntos = this.disciplina.assuntos


    })
  }
  protected disciplinaId: number
  ngOnInit(): void { }





}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplina-card',
  templateUrl: './disciplina-card.component.html',
  styleUrls: ['./disciplina-card.component.scss']
})
export class DisciplinaCardComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  protected disciplinaId: number
  ngOnInit(): void {
    this.disciplinaId = this.activatedRoute.snapshot.params["id"]
    console.log(this.disciplinaId)

  }

}

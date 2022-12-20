import { Component, OnInit } from '@angular/core';
import { AssuntoService } from '../../assunto-form/assunto.service';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
})
export class ModalDeleteComponent implements OnInit {
  constructor(private assuntoService: AssuntoService) {}
  display: boolean;
  idAssunto:number

  showDialog(id: number) {
    this.idAssunto = id
    this.display = true;

  }
  hideDialog(){
    this.display = false;
  }

  deleteAssunto(){
    this.assuntoService.deleteAssunto(this.idAssunto).subscribe({
      complete: ()=>{
        this.hideDialog()
        window.location.reload();



      }
    })

  }

  ngOnInit(): void {}
}

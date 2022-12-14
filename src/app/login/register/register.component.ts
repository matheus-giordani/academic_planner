import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cadastro } from './cadastro.interface';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  formCadastro: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    senha: [null, [Validators.required]],
    nome: [null, [Validators.required]],
  });

  ngOnInit(): void {}

  submitForm() {
    console.log(this.formCadastro.valid);
    const dadosCadastro: Cadastro = {
      name: this.formCadastro.value.nome,
      email: this.formCadastro.value.email,
      password: this.formCadastro.value.senha,
    };
    if (this.formCadastro.valid) {
      console.log('entrou');
      this.registerService.cadastroUsuario(dadosCadastro).subscribe({
        next: (v) => {
          console.log(v)
          this.toastr.success('Usuario cadastrado','Sucesso')
          this.router.navigate(['/']);
        },
        error: (e: HttpErrorResponse) => {
          console.log(e);
          const erros: { errors: string[] } = e.error;
          erros.errors.forEach((value) => {
            this.toastr.error(value, 'Error', {
              closeButton: true,
            });
          });
        },
      });

    } else {
      this.toastr.error('formulario invalido!', 'Error', {
        closeButton: true,
      });
    }
  }
}

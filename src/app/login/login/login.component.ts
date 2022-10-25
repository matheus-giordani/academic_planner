import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  endpointMessageError: string

  constructor(private router: Router, private formBuilder: FormBuilder, private auth: LoginService) { }
  formAuth: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    senha: [null, [Validators.required]]
  })

  ngOnInit(): void {

  }

  redirect() {
    this.router.navigate([['/', 'dashboard']])
  }

  submitForm() {
    if (this.formAuth.valid) {
      this.auth.sign({ email: this.formAuth.value.email, senha: this.formAuth.value.senha }).subscribe(
        {
          next: res => res,
          error: err => this.endpointMessageError = err
        });
    }


  }
}




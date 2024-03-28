import { Component, OnInit } from '@angular/core';
import { RequisicoesService } from 'src/app/services/actions/requisicoes.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidacoesService } from 'src/app/services/validators/validacoes.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private requisicoes: RequisicoesService,
    private validacoes: ValidacoesService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
        this.validacoes.validarSobrenome
      ])],
      cpf: ['', Validators.compose([
        Validators.required,
        this.validacoes.validarCpf
      ])],
      dataNascimento: [new Date(), Validators.compose([
        Validators.required,
        Validators.pattern(/^\d{4}-\d{2}-\d{2}$/),
        this.validacoes.validarIdade
      ])],
      renda: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
        Validators.email
      ])],
      dataCadastro: [new Date(), Validators.compose([
        Validators.required,
        Validators.pattern(/^\d{4}-\d{2}-\d{2}$/),
        this.validacoes.validarCadastro
      ])]
    });
  }

  createClient() {
    if(this.form.valid) {
      this.requisicoes.create(this.form.value).subscribe(() => {
        this.router.navigate(['/read']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/read']);
  }

  desabilitar(): string {
    if(this.form.valid) {
      return 'botao';
    } else {
      return 'botao_desabilitado';
    }
  }
}

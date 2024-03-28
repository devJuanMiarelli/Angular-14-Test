import { Component, OnInit } from '@angular/core';
import { RequisicoesService } from 'src/app/services/actions/requisicoes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Client } from '../../Client';
import { ValidacoesService } from 'src/app/services/validators/validacoes.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  form!: FormGroup

  constructor(
    private requisicoes: RequisicoesService,
    private validacoes: ValidacoesService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const idClient = this.route.snapshot.paramMap.get('id');
    this.requisicoes.idSearch(parseInt(idClient!)).subscribe((cliente) => {
      this.form = this.formBuilder.group({
        nome: [cliente.nome, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          this.validacoes.validarSobrenome
        ])],
        cpf: [cliente.cpf],
        dataNascimento: [cliente.dataNascimento, Validators.compose([
          Validators.required,
          Validators.pattern(/^\d{4}-\d{2}-\d{2}$/),
          this.validacoes.validarIdade
        ])],
        renda: [cliente.renda, Validators.required],
        email: [cliente.email, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          Validators.email
        ])],
        dataCadastro: [cliente.dataCadastro, Validators.compose([
          Validators.required,
          Validators.pattern(/^\d{4}-\d{2}-\d{2}$/),
          this.validacoes.validarCadastro
        ])]
      });
    })
  }

  updateClient() {
    this.requisicoes.update(this.form.value).subscribe(() => {
      this.router.navigate(['/read']);
    });
  }

  cancel(): void {
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

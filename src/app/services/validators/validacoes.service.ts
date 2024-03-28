import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { cpf } from 'cpf-cnpj-validator';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ValidacoesService {

  constructor() { }

  validarSobrenome(control: FormControl): {[key: string]: any} | null {
    const nome = control.value.trim();
    const parte = nome.split(' ');
    if(parte.length < 2) {
      return { 'semSobrenome': true};
    }
    return null;
  }

  validarCpf(control: FormControl): {[key: string]: any} | null {
    const cpfValue = control.value.trim();
    if (!cpf.isValid(cpfValue)) {
      return { 'cpfInvalido': true };
    }
    return null;
  }

  validarIdade(control: FormControl): {[key: string]: any} | null {
    const dataNascimento = moment(control.value);
    const idade = moment().diff(dataNascimento, 'years');
    if(idade < 18 || idade >= 60) {
      return { 'idadeInvalida': true };
    }
    return null;
  }

  validarCadastro(control: FormControl): {[key: string]: any} | null {
    const dataCadastro = moment(control.value);
    const dataHoje = moment();
    if(dataCadastro.isAfter(dataHoje)) {
      return { 'dataFutura': true };
    }
    return null;
  }
}

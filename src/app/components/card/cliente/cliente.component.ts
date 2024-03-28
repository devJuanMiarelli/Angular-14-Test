import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../Client';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  @Input() cliente: Client = {
    id: 0,
    nome: '',
    cpf: '',
    dataNascimento: new Date(),
    renda: '',
    email: '',
    dataCadastro:  new Date()
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  mostrarDetalhes(cliente: Client): void {
    this.router.navigate(['/cliente', cliente.id]);
  }
}

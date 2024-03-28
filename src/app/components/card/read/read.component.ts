import { Component, OnInit } from '@angular/core';
import { RequisicoesService } from 'src/app/services/actions/requisicoes.service';
import { Router } from '@angular/router';
import { Client } from '../../Client';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  clientesList: Client[] = [];
  filter: string = '';

  constructor(private requisicoes: RequisicoesService, private router: Router) { }

  ngOnInit(): void {
    this.requisicoes.read(this.filter).subscribe((listaClientes) => {
      listaClientes.forEach(cliente => {
        cliente.renda = this.mapRenda(cliente.renda);
      })
      this.clientesList = listaClientes
    });
  }

  filterClients() {
    this.requisicoes.read(this.filter).subscribe(listaClientes => {
      this.clientesList = listaClientes;
    })
    console.log(this.filter);
  }

  mapRenda(valor: string): string {
    switch(valor) {
      case 'valor1':
        return 'Abaixo R$2000';
      case 'valor2':
        return 'R$2000-4500';
      case 'valor3':
        return 'R$4500-10000';
      case 'valor4':
        return 'Acima R$10000';
      default:
        return 'inválido';
    }
  }
}

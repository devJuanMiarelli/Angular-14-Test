import { Component, OnInit } from '@angular/core';
import { Client } from '../../Client';
import { ActivatedRoute, Router } from '@angular/router';
import { RequisicoesService } from 'src/app/services/actions/requisicoes.service';

@Component({
  selector: 'app-cliente-opened',
  templateUrl: './cliente-opened.component.html',
  styleUrls: ['./cliente-opened.component.css']
})
export class ClienteOpenedComponent implements OnInit {

  cliente: Client = {
    id: 0,
    nome: '',
    cpf: '',
    dataNascimento: new Date(),
    renda: '',
    email: '',
    dataCadastro: new Date()
  }

  constructor(private router: Router, private route: ActivatedRoute, private requisicoes: RequisicoesService) { }

  ngOnInit(): void {
      const clientId = this.route.snapshot.paramMap.get('id');
      this.requisicoes.idSearch(parseInt(clientId!)).subscribe((clienteRetornado) => {
        clienteRetornado.renda = this.mapRenda(clienteRetornado.renda);
        this.cliente = clienteRetornado;
      });
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

  voltar(): void {
    this.router.navigate(['/read']);
  }
}

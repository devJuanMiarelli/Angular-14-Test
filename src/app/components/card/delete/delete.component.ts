import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequisicoesService } from 'src/app/services/actions/requisicoes.service';
import { Client } from '../../Client';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  cliente: Client = {
    id: 0,
    nome: '',
    cpf: '',
    dataNascimento: new Date(),
    renda: '',
    email: '',
    dataCadastro: new Date()
  }

  constructor(
    private requisicoes: RequisicoesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.requisicoes.idSearch(parseInt(id!)).subscribe((cliente) => {
      this.cliente = cliente;
    })
  }

  deleteClient(): void {
    if(this.cliente.id) {
      this.requisicoes.delete(this.cliente.id).subscribe(() => {
        this.router.navigate(['/read']);
      })
    }
  }

  cancel(): void {
    this.router.navigate(['/read']);
  }
}

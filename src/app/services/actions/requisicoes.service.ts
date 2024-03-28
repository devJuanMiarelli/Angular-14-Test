import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from 'src/app/components/Client';

@Injectable({
  providedIn: 'root'
})
export class RequisicoesService {

  private readonly api = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(this. api, client);
  }

  read(filtro: string): Observable<Client[]> {
    let params = new HttpParams();
    params = params.set("q", filtro);
    return this.http.get<Client[]>(this.api, { params });
  }

  update(cliente: Client): Observable<Client> {
    const url = `${this.api}/${cliente.id}`;
    return this.http.put<Client>(url, cliente);
  }

  delete(id: number): Observable<Client> {
    const url = `${this.api}/${id}`;
    return this.http.delete<Client>(url);
  }

  idSearch(id: number): Observable<Client> {
    const url = `${this.api}/${id}`;
    return this.http.get<Client>(url);
  }
}

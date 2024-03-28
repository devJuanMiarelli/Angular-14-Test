import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { CreateComponent } from './components/card/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReadComponent } from './components/card/read/read.component';
import { ClienteComponent } from './components/card/cliente/cliente.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DeleteComponent } from './components/card/delete/delete.component';
import { ClienteOpenedComponent } from './components/card/cliente-opened/cliente-opened.component';
import { UpdateComponent } from './components/card/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    CreateComponent,
    ReadComponent,
    ClienteComponent,
    DeleteComponent,
    ClienteOpenedComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ClienteOpenedComponent } from './components/card/cliente-opened/cliente-opened.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/card/create/create.component';
import { ReadComponent } from './components/card/read/read.component';
import { DeleteComponent } from './components/card/delete/delete.component';
import { UpdateComponent } from './components/card/update/update.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'read',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'read',
    component: ReadComponent
  },
  {
    path: 'card/delete/:id',
    component: DeleteComponent
  },
  {
    path: 'cliente/:id',
    component: ClienteOpenedComponent
  },
  {
    path: 'card/update/:id',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

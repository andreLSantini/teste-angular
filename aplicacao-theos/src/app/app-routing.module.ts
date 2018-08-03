import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfissaoListComponent } from './profissao/profissao-list.component';
import { ProfissaoComponent } from './profissao/profissao.component';

const routes: Routes = [
  { path: 'profissao-list', component: ProfissaoListComponent },
  { path: 'profissao-create', component: ProfissaoComponent },
  { path: 'profissao-editar/:id', component: ProfissaoComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

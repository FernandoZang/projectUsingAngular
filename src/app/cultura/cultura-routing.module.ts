import { CulturaDetalhesComponent } from './cultura-detalhes/cultura-detalhes.component';
import { CulturaCadastrarComponent } from './cultura-cadastrar/cultura-cadastrar.component';
import { CulturaListagemComponent } from './cultura-listagem/cultura-listagem.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../login/login/auth.guard';
import { CulturaEditarComponent } from './cultura-editar/cultura-editar.component';

const routes: Routes = [
  {path: 'culturas', component: CulturaListagemComponent, canActivate: [AuthGuard]},
  {path: 'cultura/cadastrar', component: CulturaCadastrarComponent, canActivate: [AuthGuard]},
  {path: 'cultura/editar/:id', component: CulturaEditarComponent, canActivate: [AuthGuard]},
  {path: 'cultura/detalhes/:id', component: CulturaDetalhesComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CulturaRoutingModule { }

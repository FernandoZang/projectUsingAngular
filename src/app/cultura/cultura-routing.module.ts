import { CulturaCadastrarComponent } from './cultura-cadastrar/cultura-cadastrar.component';
import { CulturaListagemComponent } from './cultura-listagem/cultura-listagem.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../login/login/auth.guard';

const routes: Routes = [
  {path: 'culturas', component: CulturaListagemComponent, canActivate: [AuthGuard]},
  {path: 'cultura/cadastrar', component: CulturaCadastrarComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CulturaRoutingModule { }

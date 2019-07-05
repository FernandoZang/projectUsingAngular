import { AuthGuard } from './../login/login/auth.guard';
import { SoloCadastarComponent } from './solo-cadastar/solo-cadastar.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoloListagemComponent } from './solo-listagem/solo-listagem.component';
import { SoloEditarComponent } from './solo-editar/solo-editar.component';


const routes: Routes = [
  {path: 'solos', component: SoloListagemComponent, canActivate: [AuthGuard]},
  {path: 'solo/cadastrar', component: SoloCadastarComponent, canActivate: [AuthGuard]},
  {path: 'solo/editar/:id', component: SoloEditarComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoloRoutingModule { }

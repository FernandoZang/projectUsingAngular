import { AreaDetalhesComponent } from './area-detalhes/area-detalhes.component';
import { AreaEditarComponent } from './area-editar/area-editar.component';
import { AreaCadastrarComponent } from './area-cadastrar/area-cadastrar.component';
import { AuthGuard } from './../login/login/auth.guard';
import { AreaListagemComponent } from './area-listagem/area-listagem.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: 'areas', component: AreaListagemComponent, canActivate: [AuthGuard]},
  {path: 'area/cadastrar', component: AreaCadastrarComponent, canActivate: [AuthGuard]},
  {path: 'area/editar/:id', component: AreaEditarComponent, canActivate: [AuthGuard]},
  {path: 'area/detalhes/:id', component: AreaDetalhesComponent, canActivate: [AuthGuard]}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRoutingModule { }

import { AreaCadastrarComponent } from './area-cadastrar/area-cadastrar.component';
import { AuthGuard } from './../login/login/auth.guard';
import { AreaListagemComponent } from './area-listagem/area-listagem.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: 'areas', component: AreaListagemComponent, canActivate: [AuthGuard]},
  {path: 'area/cadastrar', component: AreaCadastrarComponent, canActivate: [AuthGuard]}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRoutingModule { }

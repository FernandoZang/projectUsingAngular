import { SoloService } from './../solo/solo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';
import { AreaListagemComponent } from './area-listagem/area-listagem.component';
import { AreaCadastrarComponent } from './area-cadastrar/area-cadastrar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AreaEditarComponent } from './area-editar/area-editar.component';
import { AreaDetalhesComponent } from './area-detalhes/area-detalhes.component';
import { AreaDeletarComponent } from './area-deletar/area-deletar.component';

@NgModule({
  declarations: [AreaListagemComponent, AreaCadastrarComponent, AreaEditarComponent, AreaDetalhesComponent, AreaDeletarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AreaRoutingModule
  ],
  providers: [SoloService]
})
export class AreaModule { }

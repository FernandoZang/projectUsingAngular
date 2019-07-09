import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CulturaRoutingModule } from './cultura-routing.module';
import { CulturaListagemComponent } from './cultura-listagem/cultura-listagem.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CulturaService } from './cultura.service';
import { CulturaCadastrarComponent } from './cultura-cadastrar/cultura-cadastrar.component';
import { CulturaEditarComponent } from './cultura-editar/cultura-editar.component';
import { CulturaDetalhesComponent } from './cultura-detalhes/cultura-detalhes.component';
import { CulturaDeletarComponent } from './cultura-deletar/cultura-deletar.component';

@NgModule({
  declarations: [CulturaListagemComponent, CulturaCadastrarComponent, CulturaEditarComponent, CulturaDetalhesComponent, CulturaDeletarComponent],
  imports: [
    CommonModule,
    CulturaRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CulturaService]
})
export class CulturaModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CulturaRoutingModule } from './cultura-routing.module';
import { CulturaListagemComponent } from './cultura-listagem/cultura-listagem.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CulturaService } from './cultura.service';
import { CulturaCadastrarComponent } from './cultura-cadastrar/cultura-cadastrar.component';

@NgModule({
  declarations: [CulturaListagemComponent, CulturaCadastrarComponent],
  imports: [
    CommonModule,
    CulturaRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CulturaService]
})
export class CulturaModule { }

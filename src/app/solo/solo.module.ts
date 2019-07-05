
import { ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoloRoutingModule } from './solo-routing.module';
import { SoloListagemComponent } from './solo-listagem/solo-listagem.component';
import { SoloCadastarComponent } from './solo-cadastar/solo-cadastar.component';
import { SoloEditarComponent } from './solo-editar/solo-editar.component';
import { SoloService } from './solo.service';

@NgModule({
  declarations: [SoloListagemComponent, SoloCadastarComponent, SoloEditarComponent],
  imports: [
    CommonModule,
    SoloRoutingModule,
    ReactiveFormsModule
  ],
  providers: [SoloService]
})
export class SoloModule { }

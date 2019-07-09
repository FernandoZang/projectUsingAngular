import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';
import { AreaListagemComponent } from './area-listagem/area-listagem.component';
import { AreaCadastrarComponent } from './area-cadastrar/area-cadastrar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AreaListagemComponent, AreaCadastrarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AreaRoutingModule
  ]
})
export class AreaModule { }

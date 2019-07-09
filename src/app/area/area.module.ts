import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';
import { AreaListagemComponent } from './area-listagem/area-listagem.component';

@NgModule({
  declarations: [AreaListagemComponent],
  imports: [
    CommonModule,
    AreaRoutingModule
  ]
})
export class AreaModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataFormRoutingModule } from './data-form-routing.module';
import { DataFormComponent } from './data-form/data-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DataFormComponent],
  imports: [
    CommonModule,
    DataFormRoutingModule,
    FormsModule, //para formulario template driven
    ReactiveFormsModule //para forms data-driven 
  ],
  exports: [DataFormComponent]
})
export class DataFormModule { }

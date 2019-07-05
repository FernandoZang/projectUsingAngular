import { DataFormComponent } from './data-form/data-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'dataform', component: DataFormComponent},
  {path: '', component: DataFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataFormRoutingModule { }

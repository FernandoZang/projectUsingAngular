import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-area-cadastrar',
  templateUrl: './area-cadastrar.component.html',
  styleUrls: ['./area-cadastrar.component.css']
})
export class AreaCadastrarComponent implements OnInit {

  formulario: FormGroup

  message: string;

  

  constructor(
    private formBuilder: FormBuilder,
    private areaService: AreaService,
    private route: Router
  ) { }



  ngOnInit() {
    this.formulario = this.formBuilder.group({
        description: [null]
    });
  }



  onSubmit(){
    this.areaService.cadastrar(this.f.description.value).subscribe(
      () =>{
        this.route.navigate(['areas']);
      },
      (error) => {
        this.message = error;
      }
    ); // não precisa do Json Stringfy
    console.log(this.formulario.value);
    console.log(JSON.stringify(this.formulario.value));
    
  }




  get f() {
    return this.formulario.controls;
  }





}

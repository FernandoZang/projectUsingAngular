import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CulturaService } from '../cultura.service';

@Component({
  selector: 'app-cultura-cadastrar',
  templateUrl: './cultura-cadastrar.component.html',
  styleUrls: ['./cultura-cadastrar.component.css']
})
export class CulturaCadastrarComponent implements OnInit {

  formulario: FormGroup

  message: string;

  constructor(
    private formBuilder: FormBuilder,
    private culturaService: CulturaService,
    private route: Router
  ) { }



  ngOnInit() {
    this.formulario = this.formBuilder.group({
        description: [null]
    });
  }



  onSubmit(){
    this.culturaService.cadastrar(this.f.description.value).subscribe(
      () =>{
        this.route.navigate(['culturas']);
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

import { SoloService } from './../solo.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solo-cadastar',
  templateUrl: './solo-cadastar.component.html',
  styleUrls: ['./solo-cadastar.component.css']
})
export class SoloCadastarComponent implements OnInit {

  formulario: FormGroup

  message: string;

  constructor(
    private formBuilder: FormBuilder,
    private soloService: SoloService,
    private route: Router
  ) { }



  ngOnInit() {
    this.formulario = this.formBuilder.group({
        description: [null]
    });
  }



  onSubmit(){
    
    this.soloService.cadastrar(this.f.description.value).subscribe(
      () =>{
        this.route.navigate(['solos']);
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

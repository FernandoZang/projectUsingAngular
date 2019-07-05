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
    
    this.soloService.cadastrarSolo(this.formulario.value); // não precisa do Json Stringfy
    //console.log(this.formulario.value);
    console.log(JSON.stringify(this.formulario.value));
    this.route.navigate(['solos']);
  }


  
}

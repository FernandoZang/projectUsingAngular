import { SoloService } from './../../solo/solo.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AreaService } from '../area.service';
import { Solo } from 'src/app/solo/Solo';

@Component({
  selector: 'app-area-cadastrar',
  templateUrl: './area-cadastrar.component.html',
  styleUrls: ['./area-cadastrar.component.css']
})
export class AreaCadastrarComponent implements OnInit {

  formulario: FormGroup

  message: string;


  solos: Solo[];


  constructor(
    private formBuilder: FormBuilder,
    private areaService: AreaService,
    private route: Router,
    private soloService: SoloService
  ) { }



  ngOnInit() {
    this.formulario = this.formBuilder.group({
        description: [null],
        soil: [null],
        geometry: [null]
    });

    this.getSolos();

  }

  private getSolos(){
    this.soloService.getAll().subscribe(dados=>this.solos = dados);
  }


  onSubmit(){
    this.areaService.cadastrar(this.f.description.value, this.f.soil.value, this.f.geometry.value).subscribe(
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

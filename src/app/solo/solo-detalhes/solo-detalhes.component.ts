import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SoloService } from '../solo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Solo } from '../Solo';

@Component({
  selector: 'app-solo-detalhes',
  templateUrl: './solo-detalhes.component.html',
  styleUrls: ['./solo-detalhes.component.css']
})
export class SoloDetalhesComponent implements OnInit {

  id;
  //description;
  
  public formulario: FormGroup

  private sub: any;

  
  message: string;

  public solo: Solo;

  private obsSolo :Observable<Solo>;


  constructor(
    private soloService: SoloService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });

    this.formulario = this.formBuilder.group({
      description: [null],
      createdAt: [null]
    });

    this.getById(this.id);
  
  }//ngOnInit

  private getById(id: number){
    this.soloService.getById(this.id).subscribe( (dados:Solo) =>{
       this.solo = dados;
       let d = new Date(dados.createdAt);
       dados.createdAt = d.getFullYear() + "/" + (d.getUTCMonth()+1) + "/" + d.getDate();
       console.log("Solo date: " + d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate()  )
    });
    
  }



  get f() {
    return this.formulario.controls;
  }





}//SoloDetalhesComponent

import { ActivatedRoute, Router } from '@angular/router';
import { CulturaService } from './../cultura.service';
import { Observable } from 'rxjs';
import { Cultura } from './../Cultura';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cultura-detalhes',
  templateUrl: './cultura-detalhes.component.html',
  styleUrls: ['./cultura-detalhes.component.css']
})
export class CulturaDetalhesComponent implements OnInit {


  id;
  //description;
  
  public formulario: FormGroup

  private sub: any;

  
  message: string;

  public cultura: Cultura;

  //private obsCultura :Observable<Cultura>;


  constructor(
    private culturaService: CulturaService,
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
    this.culturaService.getById(this.id).subscribe( (dados:Cultura) =>{
       this.cultura = dados;
       let d = new Date(dados.createdAt);
       dados.createdAt = d.getFullYear() + "/" + (d.getUTCMonth()+1) + "/" + d.getDate();
       console.log("Cultura date: " + d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate()  )
    });
    
  }



  get f() {
    return this.formulario.controls;
  }




}

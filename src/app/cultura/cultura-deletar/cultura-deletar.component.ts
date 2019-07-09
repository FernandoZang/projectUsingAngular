import { ActivatedRoute, Router } from '@angular/router';
import { CulturaService } from './../cultura.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Cultura } from '../Cultura';

@Component({
  selector: 'app-cultura-deletar',
  templateUrl: './cultura-deletar.component.html',
  styleUrls: ['./cultura-deletar.component.css']
})
export class CulturaDeletarComponent implements OnInit {


  
  id;
  //description;
  
  public formulario: FormGroup

  private sub: any;

  
  message: string;

  public cultura: Cultura;


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
    this.culturaService.getById(this.id).subscribe( (dados:Cultura) =>{ this.cultura = dados; });
  }

  onSubmit(){
    this.culturaService
      .deletar(this.cultura.id)
      .subscribe( () => {alert("Cultura Deletada")});
    this.router.navigate(['culturas']);
  }



  get f() {
    return this.formulario.controls;
  }

}

import { ActivatedRoute, Router } from '@angular/router';
import { CulturaService } from './../cultura.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Cultura } from '../Cultura';

@Component({
  selector: 'app-cultura-editar',
  templateUrl: './cultura-editar.component.html',
  styleUrls: ['./cultura-editar.component.css']
})
export class CulturaEditarComponent implements OnInit {

 

  id;
  //description;
  
  public formulario: FormGroup

  private sub: any;

  
  message: string;


  constructor(
    private culturaService: CulturaService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
   }

   public cultura: Cultura;




  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });

    this.formulario = this.formBuilder.group({
      description: [null]
    });

    this.getById(this.id);

    //this.f.description.setValue(this.solo.description);

  }//onInit


  private getById(id: number){
    this.culturaService.getById(this.id).subscribe( (dados:Cultura) =>{ this.cultura = dados; });
  }




  get f() {
    return this.formulario.controls;
  }




  onSubmit(){
    this.culturaService.editar(this.id, this.f.description.value).subscribe(() => {
      this.router.navigate(['culturas']);
    },
    (error) => {
      this.message = error;
    });
  }



}

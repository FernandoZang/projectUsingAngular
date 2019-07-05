import { Solo } from './../Solo';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SoloService } from '../solo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-solo-editar',
  templateUrl: './solo-editar.component.html',
  styleUrls: ['./solo-editar.component.css']
})
export class SoloEditarComponent implements OnInit {

  

  id;
  //description;
  
  public formulario: FormGroup

  private sub: any;

  
  message: string;


  constructor(
    private soloService: SoloService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
   }

   public solo: Solo;




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
    this.soloService.getById(this.id).subscribe( (dados:Solo) =>{ this.solo = dados; });
  }




  get f() {
    return this.formulario.controls;
  }




  onSubmit(){
    this.soloService.editar(this.id, this.f.description.value).subscribe(() => {
      this.router.navigate(['solos']);
    },
    (error) => {
      this.message = error;
    });
  }

}

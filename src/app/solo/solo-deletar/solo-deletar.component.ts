import { Component, OnInit } from '@angular/core';
import { Solo } from '../Solo';
import { SoloService } from '../solo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-solo-deletar',
  templateUrl: './solo-deletar.component.html',
  styleUrls: ['./solo-deletar.component.css']
})
export class SoloDeletarComponent implements OnInit {

  id;
  //description;
  
  public formulario: FormGroup

  private sub: any;

  
  message: string;

  public solo: Solo;


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
    this.soloService.getById(this.id).subscribe( (dados:Solo) =>{ this.solo = dados; });
  }

  onSubmit(){
    this.soloService
      .deletar(this.solo.id)
      .subscribe( () => {alert("Solo Deletado")});
    this.router.navigate(['solos']);
  }



  get f() {
    return this.formulario.controls;
  }

}

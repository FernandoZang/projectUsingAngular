import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SoloService } from '../solo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-solo-editar',
  templateUrl: './solo-editar.component.html',
  styleUrls: ['./solo-editar.component.css']
})
export class SoloEditarComponent implements OnInit {

  solo: any;

  id: number;
  
  formulario: FormGroup

  private sub: any;





  constructor(
    private soloService: SoloService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private route: Router
  ) { }




  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    
    this.getById(this.id);

    this.formulario = this.formBuilder.group({
      description: [this.solo.description]
    });

    //this.getById(this.id);
    //this.formulario.value.description = this.solo.description;

    //console.log("Solo: " + this.solo.description);
  }




  getById(id: number){
    this.soloService.getSoilById(id).subscribe( dados => this.solo = dados);
    console.log("SOLO: " + this.solo);
  }




  onSubmit(){
    this.soloService.cadastrarSolo(this.formulario.value); // não precisa do Json Stringfy
    //console.log(this.formulario.value);
    console.log(JSON.stringify(this.formulario.value));
    this.route.navigate(['solos']);
  }

}

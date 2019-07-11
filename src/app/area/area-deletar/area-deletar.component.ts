import { ActivatedRoute, Router } from '@angular/router';
import { AreaService } from './../area.service';
import { Area } from './../Area';
import { Solo } from './../../solo/Solo';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SoloService } from 'src/app/solo/solo.service';

@Component({
  selector: 'app-area-deletar',
  templateUrl: './area-deletar.component.html',
  styleUrls: ['./area-deletar.component.css']
})
export class AreaDeletarComponent implements OnInit {



  id;
  //description;
  
  public formulario: FormGroup;

  private sub: any;

  
  message: string;

  

  //private obsCultura :Observable<Cultura>;

  public solos: Solo[];
  public solo: Solo;
  public area: Area;


  constructor(
    private areaService: AreaService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private soloService: SoloService
  ) {
   }






  




  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });

    this.formulario = this.formBuilder.group({
      description: [null],
      soil: [null],
      geometry: [null]
    });

    this.getSolos();
    this.getAreaById(this.id);
  
  }//ngOnInit

  private getAreaById(id: number){
    this.areaService.getById(this.id).subscribe( (dados:Area) =>{ this.area = dados; });
  }


  private getSolos(){
    this.soloService.getAll().subscribe(dados=>this.solos = dados);
  }



  get f() {
    return this.formulario.controls;
  }

  onSubmit(){
    this.areaService
      .deletar(this.area.id)
      .subscribe( () => {alert("Area Deletada")});
    this.router.navigate(['areas']);
  }

}

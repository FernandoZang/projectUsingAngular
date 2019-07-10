import { Solo } from 'src/app/solo/Solo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AreaService } from '../area.service';
import { Area } from '../Area';
import { SoloService } from 'src/app/solo/solo.service';

@Component({
  selector: 'app-area-editar',
  templateUrl: './area-editar.component.html',
  styleUrls: ['./area-editar.component.css']
})
export class AreaEditarComponent implements OnInit {



  id;
  //description;
  
  public formulario: FormGroup

  private sub: any;

  
  message: string;


  constructor(
    private areaService: AreaService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private soloService: SoloService
  ) {
   }

   public area: Area;
   public solos: Solo[];
   public solo: Solo;




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

//    this.f.description.setValue(this.solo.description);

  }//onInit


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
    this.areaService.editar(this.id, this.f.description.value, this.f.geometry.value, this.f.soil.value).subscribe(() => {
      this.router.navigate(['areas']);
    },
    (error) => {
      this.message = error;
    });
  }


}

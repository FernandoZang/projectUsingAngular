import { Component, OnInit } from '@angular/core';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-area-listagem',
  templateUrl: './area-listagem.component.html',
  styleUrls: ['./area-listagem.component.css']
})
export class AreaListagemComponent implements OnInit {



  areas: any[];

  constructor(
    private areaService: AreaService
  ) { }

  ngOnInit() {
    this.listarAreas();
  }

  public listarAreas(){
    //console.log(this.solos)
    this.areaService.getAll().subscribe(dados=>this.areas = dados);
  }

 

}//AreaListageComponent

import { CulturaService } from './../cultura.service';
import { Cultura } from './../Cultura';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cultura-listagem',
  templateUrl: './cultura-listagem.component.html',
  styleUrls: ['./cultura-listagem.component.css']
})
export class CulturaListagemComponent implements OnInit {

  culturas: any[];

  constructor(
    private culturaService: CulturaService
  ) { }

  ngOnInit() {
    this.listarCulturas();
  }

  public listarCulturas(){
    //console.log(this.solos)
    this.culturaService.getAll().subscribe(dados=>this.culturas = dados);
   
  }

}

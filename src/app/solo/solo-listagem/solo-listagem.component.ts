import { Solo } from './../Solo';
import { Component, OnInit } from '@angular/core';
import { SoloService } from '../solo.service';

@Component({
  selector: 'app-solo-listagem',
  templateUrl: './solo-listagem.component.html',
  styleUrls: ['./solo-listagem.component.css']
})
export class SoloListagemComponent implements OnInit {

  solos: any[];

  constructor(
    private soloService: SoloService
  ) { }

  ngOnInit() {
    this.listarSolos();
  }

  public listarSolos(){
    //console.log(this.solos)
    this.soloService.getAll().subscribe(dados=>this.solos = dados);
   
  }

}

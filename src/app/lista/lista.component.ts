import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  public clasificacion:Array <any>;
  constructor( private _listaService : ListaService) { 
    this.clasificacion=[];
  }

  ngOnInit() {

    this._listaService.obtener().subscribe(data=>{
      for (let index = 0; index < data.table.length; index++) {
        this.clasificacion.push(data.table[index]);
      
      }
      console.log(this.clasificacion[0].strTeam);
    });


   
    
  }

  
}

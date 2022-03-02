import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaService } from '../lista.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  public clasificacion:Array <any>;
  public equipo:Array <any>;
  public id=0;

  constructor( private _listaService : ListaService, private actRoute: ActivatedRoute, private _router: Router) { 
    this.clasificacion=[];
    this.equipo=[];
    this.id=this.actRoute.snapshot.params["id"];

  }

  ngOnInit() {

    this._listaService.obtener().subscribe(data=>{
      for (let index = 0; index < data.table.length; index++) {
        this.clasificacion.push(data.table[index]);

  
        this._listaService.obtenerE(this.id).subscribe(data=>{
          for (let index = 0; index < data.equipment.length; index++) {
            this.equipo.push(data.equipment[index]);
          
          }
          console.log(this.equipo[0].strEquipment);
        });

      }
      console.log(this.clasificacion[0].strTeam);
    });
    
  }

  borrarEquipo(i:number){
    this.clasificacion.splice(i,1);
  }

  
}

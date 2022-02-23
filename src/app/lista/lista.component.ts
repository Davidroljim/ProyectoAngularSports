import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://www.thesportsdb.com/api/v1/json/2/lookuptable.php?l=4335&s=2021-2022').subscribe(data=>{console.log(data);});
  }

}

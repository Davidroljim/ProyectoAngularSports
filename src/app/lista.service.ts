import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListaService {
  public url:string;
  public urlE:string;
  
  constructor(private http:HttpClient) {
    this.url="https://www.thesportsdb.com/api/v1/json/2/lookuptable.php?l=4335&s=2021-2022";

    this.urlE="https://www.thesportsdb.com/api/v1/json/2/lookupequipment.php?id=";
   }

   obtener (): Observable<any>{
     return this.http.get(this.url);
   }

   obtenerE (id:any): Observable<any>{
    return this.http.get(this.urlE+id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListaService {
  public url:string;
  constructor(private http:HttpClient) {
    this.url="https://www.thesportsdb.com/api/v1/json/2/lookuptable.php?l=4335&s=2021-2022";
   }

   obtener (): Observable<any>{
     return this.http.get(this.url);
   }
}

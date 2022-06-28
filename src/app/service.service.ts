import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { categorie, question } from './questionModel';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) {}
  getquest(): Observable<question[]>{
    return this.http.get<question[]>("http://localhost:3000/question");
  }
  getCat(): Observable<categorie[]>{
    return this.http.get<categorie[]>("http://localhost:3000/categorie");
  }
 
}

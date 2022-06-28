import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { question } from './questionModel';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url= "http://localhost:3000/question";

  constructor(private http : HttpClient) {}
  getquest(): Observable<question[]>{
    return this.http.get<question[]>(this.url);
  }
}

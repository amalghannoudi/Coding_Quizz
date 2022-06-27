import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url= "http://localhost:3000/question";

  constructor(private http : HttpClient) {}
  getquest(): Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }
}

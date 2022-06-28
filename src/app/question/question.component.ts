import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  constructor(private http:HttpClient, private service:ServiceService ) { }
   question :any ; 
  ngOnInit(): void {
    this.service.getquest().subscribe(
      (res)=>this.question=res
      ) ;
  }

 
}

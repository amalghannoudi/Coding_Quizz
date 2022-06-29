import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-domaine',
  templateUrl: './domaine.component.html',
  styleUrls: ['./domaine.component.css']
})
export class DomaineComponent implements OnInit {
  constructor(private http : HttpClient , private service : ServiceService) { }
  categorie : any ; 

  ngOnInit(): void {
    this.service.getCat().subscribe(
      (res)=>this.categorie=res
      ) ;
  }

}

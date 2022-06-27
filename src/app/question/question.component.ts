import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  constructor() { }
   
  ngOnInit(): void {
  }

  public quest =[
    {
        "idQ": 1,
        "domaine": "angular",
        "valQ": "Which of the following is correct about TypeScript ? ",
        "reponse": [
          {
            "idR": "A",
            "valR": " Angular is based on TypeScript ",
            "answer": "False"
          },
          {
            "idR": "B",
            "valR":"TypeScript is maintained by Microsoft",
            "answer": "False"
          },
          {
            "idR": "C",
            "valR": "This is a superset of JavaScript",
            "answer": "False"
          },
          {
            "idR":"D",
            "valR": "All answers are correct",
            "answer": "True"
          }
        ],
        "typeR":"multiple" 
      }  
     
]
}

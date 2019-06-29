import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }
  
  nombres :Array<string> = [
    'Juan',
    'Maria',
    'Pedro',
    'Lucia'
  ];

  ngOnInit() {
  }

}

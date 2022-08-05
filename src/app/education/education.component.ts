import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  year: string;
  class: string;
  school: string;
  grade: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {year:'2005 - 2012',class:"1st-7th",school:"GSL public school",grade:96},
  {year:'2013',class:"8th",school:"Ambe School",grade:78},
  {year:'2014 - 2016',class:"9th-10th",school:"The Bright school",grade:77.5},
  {year:'2016 - 2018',class:"11th-12th",school:"The Bright school",grade:94},
  {year:'2018 - 2022',class:"1st-4th",school:"The Maharaja Sayajirao University of Baroda",grade:77.5},
];

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['year', 'class', 'school', 'grade'];
  dataSource = ELEMENT_DATA;
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  today:Date = new Date()
  date:number = this.today.getDate()
  month:number = this.today.getMonth()+1
  year:number = this.today.getFullYear()
  time:number = this.today.getHours()
  wish:string = "Good "

  getWish(){
    if (this.time >=5 && this.time<=12){
      return this.wish.concat("Morning!!");
    }
    else if(this.time >12 && this.time <16){
      return this.wish.concat("Afernoon!!");
    }
    else if(this.time >=16 && this.time <=19){
      return this.wish.concat("Evening!!");
    }
    else {
      return this.wish.concat("Night!!");
    }
  }

  

}

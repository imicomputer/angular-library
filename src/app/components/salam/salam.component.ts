import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salam',
  templateUrl: './salam.component.html',
  styleUrls: ['./salam.component.css']
})
export class SalamComponent implements OnInit {
  title = 'My angular-library';
  todayDate = new Date();
  currMonth = this.todayDate.getMonth();

  isShown = true;

  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};

  months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
  friends = ["Maya", "Mela", "Martin", "Ahmad"];
  
  constructor() { }

  ngOnInit(): void {
  }

  test() {
    return "test";
  }
}

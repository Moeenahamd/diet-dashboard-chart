import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  
  constructor(private dataService:ServiceService) { }
  todayList:any;
  originalList:any;
  ngOnInit(): void {
    this.getTodayList()
  }

  
  // Function to get today list by adding sum of each in last row
  getTodayList(){
    this.todayList=[]
    this.originalList = this.dataService.getTodayList()  //populated today list
    this.todayList = JSON.parse(JSON.stringify(this.dataService.getTodayList()))

    
    // Made an object which calculate sum of each elements
    var obj={
      "name":"Total",
      "quantity":this.sum(this.todayList , 'quantity'),
      "carbohydrates":this.sum(this.todayList , 'carbohydrates'),
      "calories":this.sum(this.todayList , 'calories'),
      "fats":this.sum(this.todayList , 'fats'),
      "protiens":this.sum(this.todayList , 'protiens'),
      "last": true
    }

    //Pushing this object to today list to display sums in last row
    if(this.todayList.length>0){
      this.todayList.push(obj)
    }
  }

  // Function to calculate sum of perticular element from array
  sum(items:any, prop:any) {
    return items.reduce((a:any, b:any) => {
      return a + b[prop];
    }, 0);
  }
  
  // Function to remove perticular element from today list
  remove(index:number){
    this.dataService.removeToday(index);
    this.getTodayList()
  }
}

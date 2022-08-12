import { Component, OnInit } from '@angular/core';
import { Chart, registerables  } from "chart.js";
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private dataService:ServiceService) { }
  chart:any
  todayList:any;
  ngOnInit(): void {
    this.getTodayList()
    this.displayChart()
  }
  
  // function to get today list
  getTodayList(){
    this.todayList=[]
    this.todayList = this.dataService.getTodayList()
  }

  // function for chart logic
  displayChart(){
    Chart.register(...registerables);
    
    var xValues = ["Quantity", "Fats", "Carbohydrates", "Calories", "Protiens"];  // Lables to be displayed on x axis
    var quantity = this.sum(this.todayList , 'quantity')   // Sum of quantity from today list
    var carbohydrates = this.sum(this.todayList , 'carbohydrates')    // Sum of carbohydrates from today list
    var calories = this.sum(this.todayList , 'calories')    // Sum of calories from today list
    var fats = this.sum(this.todayList , 'fats')  // Sum of fats from today list
    var protiens = this.sum(this.todayList , 'protiens')  // Sum of protiens from today list


    var sum = quantity+ fats+ carbohydrates+ calories+ protiens; 
    var yValues = [(quantity/sum)*100, (fats/sum)*100, (carbohydrates/sum)*100, (calories/sum)*100, (protiens/sum)*100]; // Taking % of eaxh
    var barColors = ["red", "green","blue","orange","brown"]; // color of bars

    // Code for displaying chart
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      }
    });
  }

  // Function to calculate sum of perticular element from array
  sum(items:any, prop:any) {
    return items.reduce((a:any, b:any) => {
      return a + b[prop];
    }, 0);
  }

}

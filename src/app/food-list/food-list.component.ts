import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor(private dataService:ServiceService) { }

  foodList:any;
  ngOnInit(): void {
    // When page is initiaized then following function would be called

    this.getFoodList()
  }

  // Function to get all Food List

  getFoodList(){
    this.foodList =this.dataService.getList()
  }
   // Function to add Food to Today  
  
  addToToday(data:any,index :number){
    this.dataService.addToTodayList(data)
    
    this.foodList.splice(index, 1);
  }

}

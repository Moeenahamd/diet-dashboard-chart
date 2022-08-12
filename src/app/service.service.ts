import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  todayList:any=[];
  data:any = [
    {
      "name":"Apple",
      "quantity":1,
      "carbohydrates":4,
      "calories":30,
      "fats":8,
      "protiens":10,
    },
    {
      "name":"Egg",
      "quantity":4,
      "carbohydrates":8,
      "calories":50,
      "fats":3,
      "protiens":20
    },
    {
      "name":"Pizza",
      "quantity":2,
      "carbohydrates":14,
      "calories":30,
      "fats":2,
      "protiens":40
    },
    {
      "name":"PineApple",
      "quantity":5,
      "carbohydrates":17,
      "calories":80,
      "fats":35,
      "protiens":34
    },
    {
      "name":"Mango",
      "quantity":2,
      "carbohydrates":26,
      "calories":80,
      "fats":50,
      "protiens":60
    }
  ]
  private Url="./data.json";
  constructor(private http:HttpClient) { }
  getList():Observable<any>{
    return this.data
  }
  addToTodayList(data:any){
    this.todayList.push(data);
  }
  getTodayList():Observable<any>{
    return this.todayList;
  }
  removeToday(index:any){
    this.todayList.splice(index, 1);
    console.log(this.todayList)
  }
}

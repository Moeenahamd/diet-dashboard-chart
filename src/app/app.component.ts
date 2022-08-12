import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diet-dashboard';
  myDate:any = new Date();
  constructor(private datePipe: DatePipe){

    //Interval to update date and time every second
    setInterval(() => {
      this.myDate =  new Date();
      this.myDate = this.datePipe.transform(this.myDate, 'MMM d,  h:mm a');
    }, 1000)
  }
}

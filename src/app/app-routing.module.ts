import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { FoodListComponent } from './food-list/food-list.component';
import { TodayComponent } from './today/today.component';

const routes: Routes = [
  {path: 'chart', component: ChartComponent },
  {path: 'today', component: TodayComponent },
  {path: 'list', component: FoodListComponent },
  {path: '', component: FoodListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

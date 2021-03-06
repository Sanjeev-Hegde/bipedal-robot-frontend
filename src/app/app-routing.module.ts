import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RobotComponent } from './robot/robot.component';
import { MovementComponent } from './movement/movement.component';


const routes: Routes = [
  {path: '' , redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'robot/:id', component:RobotComponent, pathMatch:'full'},
  {path: 'robot/:robotId/movement/:movementId', component:MovementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

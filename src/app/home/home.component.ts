import { Component, OnInit } from '@angular/core';
import { Robot } from '../shared/models/Robot';
import { RobotService } from '../shared/services/robot.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  robots:Robot[];
  constructor(private robotService: RobotService) {
  }

  ngOnInit(): void {
    this.getRobots();
  }

  addRobot(){

  }

  getRobots(){
    this.robotService.getRobots().subscribe(robots=>{
      console.log(robots);      
      this.robots = robots;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Pca9685 } from '../shared/models/Pca9685';
import { Pca9685Service } from '../shared/services/pca9685.service';
import { ActivatedRoute } from '@angular/router';
import { Movement } from '../shared/models/Movement';
import { MovementService } from '../shared/services/movement.serice';

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.scss']
})
export class RobotComponent implements OnInit {
  isDevicesCollapsed:boolean = true;
  isMovementsCollapsed:boolean = false;
  pca9685s: Pca9685[];
  movements:Movement[];
  constructor(private pca9685Service:Pca9685Service, 
    private route: ActivatedRoute,
    private movementService:MovementService  
  ) { }

  ngOnInit(): void {
    let robotId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getPca9685sFromRobotId(robotId);
    this.getMovementsFromRobotId(robotId);
  }

  getPca9685sFromRobotId(robotId:number){
    this.pca9685Service.getPca9685sFromRobotId(robotId).subscribe(pca9685s=>{
      this.pca9685s = pca9685s
    })
  }
  getMovementsFromRobotId(robotId:number){
    this.movementService.getMovementsFromRobotId(robotId).subscribe(movements=>{

      console.log(movements);
      
      this.movements = movements
    })
  }
}

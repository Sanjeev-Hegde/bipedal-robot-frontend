import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Robot } from '../shared/models/Robot';
import { RobotService } from '../shared/services/robot.service';
import { Servo, ServoSlider } from '../shared/models/Servo';
import { Pca9685 } from '../shared/models/Pca9685';
import { ServoService } from '../shared/services/servo.service';
import { Pca9685Service } from '../shared/services/pca9685.service';
import { Action } from '../shared/models/Action';
import { ServoMotion } from '../shared/models/ServoMotion';
import { ActionService } from '../shared/services/action.service';
import { ServoMotionsService } from '../shared/services/servo-motion.service';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.scss']
})
export class MovementComponent implements OnInit {
  robotId: number;
  movementId: number;
  robot:Robot;
  servos:ServoSlider[]= new Array();
  pca9685Ids = new Array<number>();
  isInitialized:boolean;
  actions:Action[] = [];
  constructor(private route: ActivatedRoute,private robotService:RobotService,
    private servoService:ServoService,
    private pca9685Service: Pca9685Service,
    private actionService:ActionService,
    private servoMotionsService: ServoMotionsService) { }

  ngOnInit(): void {
    this.robotId= parseInt(this.route.snapshot.paramMap.get('robotId'));
    this.movementId= parseInt(this.route.snapshot.paramMap.get('movementId'));
    console.log(this.robotId);
    console.log(this.movementId);
    this.getRobot(this.robotId);
  }

  getRobot(id){
    this.robotService.getRobot(id).subscribe(robot=>{
      console.log(robot);
      this.robot = robot;  
      robot.pca9685s.forEach(pca9685=>{
        this.pca9685Ids.push(pca9685.id);
        this.servos.push(...pca9685.servos); // max items that can be pushed < 150000 
      })    
    })
  }
  getRange(servo:ServoSlider){
   this.servoService.moveServo(servo.pca9685Id,servo.id,servo.range,8).subscribe();    
  }
  initializePca9685s(){
    this.pca9685Service.initializePca9685s({pca9685IdList:this.pca9685Ids}).subscribe(()=>{
      this.isInitialized=true;
    });
  }

  addServoPositions(){
    let servoMotions:ServoMotion[] = [];
    let action = new Action({type: "ACTION_SERVOMOTIONS"})
    this.actionService.addAction(action).subscribe(actionres=>{
      this.servos.forEach(servo=>{
        if(servo.range)
        servoMotions.push({finalPosition:servo.range,servoId:servo.id,speed:8,actionId:actionres.id});
      });
        
      this.servoMotionsService.addActionServoMotions(actionres.id,servoMotions).subscribe(()=>{
        this.actionService.getActions().subscribe(actions=>{
          this.actions = actions ; 
        })
      })
    })    
  }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Robot } from '../models/Robot';
import { Observable } from 'rxjs';
import { Movement } from '../models/Movement';
import { Pca9685 } from '../models/Pca9685';

@Injectable({
  providedIn: 'root'
})
export class ServoService {

    constructor(private http: HttpClient) { }

    moveServo(pca9685Id:number,servoId:number,angle:number,speed:number){
        return this.http.put('/api/pca9685s/'+pca9685Id+'/servos/'+servoId+'/move/'+angle+'/speed/'+speed,null);
    }
}
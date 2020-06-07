import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Robot } from '../models/Robot';
import { Observable } from 'rxjs';
import { Action } from '../models/Action';
import { ServoMotion } from '../models/ServoMotion';

@Injectable({
  providedIn: 'root'
})
export class ServoMotionsService {

    constructor(private http: HttpClient) { }

    addActionServoMotions(id:number,servoMotions:ServoMotion[]):Observable<Action[]>{
        return this.http.post<any>('/api/actions/'+id+'/servo-motions/list',servoMotions);
    }
    
}
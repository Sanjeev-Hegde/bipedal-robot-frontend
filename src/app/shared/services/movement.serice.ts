import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Robot } from '../models/Robot';
import { Observable } from 'rxjs';
import { Movement } from '../models/Movement';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

    constructor(private http: HttpClient) { }

    getMovementsFromRobotId(robotId:number):Observable<Movement[]>{
        return this.http.get<Movement[]>('/api/robots/'+robotId+'/movements');
    }
    
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Robot } from '../models/Robot';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RobotService {

  constructor(private http: HttpClient) { }

  addRobot(robot:Robot):Observable<Robot>{
    return this.http.post<Robot>('/api/robots/',robot);
  }

  getRobots():Observable<Robot[]>{
    return this.http.get<Robot[]>('/api/robots');
  }

}

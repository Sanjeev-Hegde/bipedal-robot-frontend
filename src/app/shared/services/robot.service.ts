import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Robot } from '../models/Robot';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RobotService {

  constructor(private http: HttpClient) { }

  fulldetailsFilter = {
    "include": [
      {
        "relation": "movements",
        "scope": {
          "include": [
            {
              "relation": "actions",
              "scope": {
                "include": [
                  {
                    "relation": "servoMotions"
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "relation": "pca9685s",
        "scope": {
          "include": [
            {
              "relation": "servos"
            }
          ]
        }
      }
    ]
  }
  
  addRobot(robot:Robot):Observable<Robot>{
    return this.http.post<Robot>('/api/robots/',robot);
  }

  getRobots():Observable<Robot[]>{
    return this.http.get<Robot[]>('/api/robots');
  }

  getRobot(id:number):Observable<Robot>{
   // let params = new URLSearchParams();
   // params.append("filter", JSON.stringify(this.fulldetailsFilter))
    return this.http.get<Robot>('/api/robots/'+id,{params:{filter:JSON.stringify(this.fulldetailsFilter)}});
  }

}

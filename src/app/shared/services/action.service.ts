import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Robot } from '../models/Robot';
import { Observable } from 'rxjs';
import { Action } from '../models/Action';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

    constructor(private http: HttpClient) { }

    actionFilter = {
        "include": [
          {
            "relation": "servoMotions"
      }]
      }
    addAction(action:Action):Observable<Action>{
        return this.http.post<Action>('/api/actions/',action);
    }

    getActions():Observable<Action[]>{
         return this.http.get<Action[]>('/api/actions',{params:{filter:JSON.stringify(this.actionFilter)}});
    }
    
}
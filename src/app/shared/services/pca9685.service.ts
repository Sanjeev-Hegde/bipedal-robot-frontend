import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Robot } from '../models/Robot';
import { Observable } from 'rxjs';
import { Pca9685 } from '../models/Pca9685';

@Injectable({
  providedIn: 'root'
})
export class Pca9685Service {

  constructor(private http: HttpClient) { }

  addPca9685(pca9685:Pca9685):Observable<Pca9685>{
    return this.http.post<Pca9685>('/api/pca9685s/',pca9685);
  }

  initializePca9685s(pca9685IdListWrapper:{"pca9685IdList":Array<number>}){
    return this.http.put('/api/pca9685s/initialize',pca9685IdListWrapper);
  }


  getPca9685s():Observable<Pca9685[]>{
    return this.http.get<Pca9685[]>('/api/pca9685s');
  }

  getPca9685(id:number):Observable<Pca9685>{
    return this.http.get<Pca9685>('/api/pca9685s/'+id);
  }

  getPca9685sFromRobotId(robotId:number):Observable<Pca9685[]>{
    return this.http.get<Pca9685[]>('/api/robots/'+robotId+'/pca9685s');
  }

  

}

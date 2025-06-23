import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../Environment/Environment';
import { CompetitionModel, Project } from '../model/competition.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http:HttpClient) { }
  private baseurl=Constant.API_URL;


deletecompetition(id:number){
    return this.http.delete(`${this.baseurl}delete/${id}`)
}

  getCompetition():Observable<CompetitionModel[]>{
    debugger
      return this.http.get<CompetitionModel[]>(Constant.API_URL + "GetAllCompetition")
  }

  getCompetitionbyId(id:number):Observable<CompetitionModel>{
    debugger
    return this.http.get<CompetitionModel>(Constant.API_URL + "competition/" +id)
  }

  createCompetition(obj:CompetitionModel){
    return this.http.post(Constant.API_URL+"competition",obj)
  }

 submitProject(obj:Project){
  debugger
           return this.http.post(Constant.API_URL + "project",obj)
  }


}

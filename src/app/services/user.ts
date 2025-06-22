import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {


  loggedUser:string ="";

  constructor(private http:HttpClient ) {
    const loggedData=localStorage.getItem("studentId");
    if(loggedData!=null){
      this.loggedUser=loggedData
    }
  }


  onUserLogin(obj:any){
    debugger
    return this.http.post("https://api.freeprojectapi.com/api/ProjectCompetition/login",obj)
  }
}

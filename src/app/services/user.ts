import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {


  loggedUser:string ="";

  loggedUserData:any=undefined;

  constructor(private http:HttpClient ) {
    const loggedData=localStorage.getItem("studentId");
   const logedUserData= localStorage.getItem("loggedUser")
    if(loggedData!=null && logedUserData!=null){
      this.loggedUser=loggedData
      this.loggedUserData=JSON.parse(logedUserData)
    }
  }


  onUserLogin(obj:any){
    debugger
    return this.http.post("https://api.freeprojectapi.com/api/ProjectCompetition/login",obj)
  }
}

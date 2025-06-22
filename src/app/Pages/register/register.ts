import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
          
  registerObj:any={
    "fullName":"",
    "email":"",
    "password":"",
    "collegeName":"",
    "role":"admin"
  }

 constructor(private http: HttpClient) {}
  

  onRegister(){
    this.http.post("https://api.freeprojectapi.com/api/ProjectCompetition/register",this.registerObj).subscribe((res:any)=>{
      alert("Student Registration successfully")
    })
  }
}

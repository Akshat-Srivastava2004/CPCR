import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {


loginForm:FormGroup=new FormGroup({
  email:new FormControl(""),
  password:new FormControl("")
})


userService=inject(UserService)
router=inject(Router)
onLogin(){
  debugger
    const formValue=this.loginForm.value;
     this.userService.onUserLogin(formValue).subscribe({
      next:(res:any)=>{
        debugger
        localStorage.setItem("studentId",res.userId)
        localStorage.setItem("loggedUser",JSON.stringify(res))
        this.router.navigateByUrl("/home")
        this.userService.loggedUser=res.userId
        this.userService.loggedUserData=res;
        console.log("the response is ",res)
        alert("User Found")
      },
      error:(err:any)=>{
        debugger
        console.log("the error is ",err)
        alert("wrong Credentials")
      }
     })
}

}

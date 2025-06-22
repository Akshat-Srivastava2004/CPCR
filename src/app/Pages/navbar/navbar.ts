import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
     userService=inject(UserService)
     router=inject(Router)

     logout() {
  localStorage.removeItem("studentId");
  this.userService.loggedUser = "";
  this.router.navigateByUrl("/home")
}
}

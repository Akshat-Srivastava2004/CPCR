import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from '../Pages/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar],
  templateUrl: './appcomponent.html',
  styleUrls: ['./appcomponent.css']
})
export class Appcomponent {

}

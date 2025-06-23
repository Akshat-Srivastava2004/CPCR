import { Component, inject, OnInit } from '@angular/core';
import { CompetitionService } from '../../services/competition';
import { CompetitionModel } from '../../model/competition.model';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule,DatePipe,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{
     getalldata=inject(CompetitionService)


     gridlist:CompetitionModel[]=[];


     ngOnInit(): void {
      debugger
         this.getAll()
     }

     getAll(){
      debugger
      this.getalldata.getCompetition().subscribe({
        next:(result)=>{
          debugger
          this.gridlist=result;
        },
        error:(err:any)=>{
          debugger
          console.log("the error is ",err)
          alert("Got an error ")
        }
      })
     }

}

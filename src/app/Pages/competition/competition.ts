import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompetitionModel } from '../../model/competition.model';
import { CompetitionService } from '../../services/competition';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-competition',
  imports: [FormsModule,DatePipe],
  templateUrl: './competition.html',
  styleUrl: './competition.css'
})
export class Competition implements OnInit {
         newobj:CompetitionModel = new CompetitionModel()

         competitonservice = inject(CompetitionService)

         gridlist: CompetitionModel[]=[];

         ngOnInit(): void {
          debugger
             this.getAll();
         }

         getAll(){
          debugger
          this.competitonservice.getCompetition().subscribe({
            
            next:(result)=>{
              debugger
                this.gridlist=result
                
            },

            error:()=>{
              debugger
               alert("API Error")
            }
          })
         }

         onSave(){
          debugger
          this.competitonservice.createCompetition(this.newobj).subscribe({
            next:()=>{
              debugger
             alert("Competition created")
             this.getAll();
            },
            error:()=>{
              debugger
            alert("Api error ")
            }
          })
         }
}

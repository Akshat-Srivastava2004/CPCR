import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionService } from '../../services/competition';
import { CompetitionModel, Project } from '../../model/competition.model';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-submit-project',
  imports: [CommonModule,FormsModule,DatePipe],
  templateUrl: './submit-project.html',
  styleUrl: './submit-project.css'
})
export class SubmitProject {



  currentcompetitionid :number=0;
  
  competitionData:CompetitionModel=new CompetitionModel();
  userservice=inject(UserService)


  srv=inject(CompetitionService)

  projectObj:Project=new Project();
        constructor(private activateRoute:ActivatedRoute){
           this.activateRoute.params.subscribe((result:any)=>{
            this.currentcompetitionid=result.id;
            this.getcompetitionbyid();
           })
        }

        getcompetitionbyid(){
          this.srv.getCompetitionbyId(this.currentcompetitionid).subscribe({
            next:(result)=>{
                 this.competitionData=result;
            },

            error:(err:any)=>{
              alert("Got an Error while fetching the competition details ")
              console.log("the error details is ",err)
            }
          })
        }



        onSave(){
         this.projectObj.userId=Number(this.userservice.loggedUser);
         this.projectObj.competitionId=this.currentcompetitionid;

          this.srv.submitProject(this.projectObj).subscribe({
            next:()=>{
              debugger
              alert("submisson successfully")
            },
            error:()=>{
              debugger
              alert("Not able to submit try again later")
            }
          })
        }
       
}

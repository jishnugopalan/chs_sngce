import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
var jobs:any
@Component({
  selector: 'app-viewworkers',
  templateUrl: './viewworkers.page.html',
  styleUrls: ['./viewworkers.page.scss'],
})
export class ViewworkersPage implements OnInit {
workerslist=[]
  constructor(private authService:AuthService,private router:Router) { }

  view(j){
    this.authService.id=(j._id)
    console.log(this.authService.id)
    this.router.navigateByUrl("/approveworkers");
 

  }

  ngOnInit() {
    this.authService.viewWorker('').subscribe(res=>{
      console.log(res)
      
       jobs= res;
    
       console.log(jobs)
       this.workerslist=jobs;
       
      //  this.workersdetails=jobs.workersdetails;
      //  console.log(this.workersdetails)

    })
  }

}

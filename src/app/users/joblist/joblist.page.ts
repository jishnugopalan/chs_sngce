import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
var jobs:any
@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.page.html',
  styleUrls: ['./joblist.page.scss'],
})
export class JoblistPage implements OnInit {
  joblist=[];
  constructor(private authService:AuthService,private router:Router) { }
  public viewWorkers(cat){
    console.log(cat)
    this.authService.viewmyworkers({"category":cat}).subscribe(res=>{
      console.log(res)
      this.authService.myworkers=res;
      console.log(this.authService.myworkers)
      this.router.navigateByUrl("/workerslist");
      
    });
    }

  ngOnInit() {
    this.authService.viewcategory('').subscribe(res=>{
      console.log(res)
      
       jobs= res;
    
       console.log(jobs)
       this.joblist=jobs;
    })
  }

}

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var jobs:any;

@Component({
  selector: 'app-approveworkers',
  templateUrl: './approveworkers.page.html',
  styleUrls: ['./approveworkers.page.scss'],
})
export class ApproveworkersPage implements OnInit {
  public approved:boolean =false
  public rejected:boolean =false
  workersdetails=[];
  workerslist=[];

  constructor(private authService:AuthService,public alertController:AlertController,public router:Router) { }

  public change(){
    //var a=document.getElementById("toggle").value;
    console.log(this.authService.id)
    this.authService.updateWorker({"userid":this.authService.id}).subscribe(async res=>{
      console.log(res)
      
      
      var Dt = Date.now();
      this.authService.notification({"userid":this.authService.id,"content":"Admin approved your request for worker account","from":"Admin","datetime":Dt,"notificationtype":"admin"}).subscribe(res=>{
        console.log(res)
      })
      const alert = await this.alertController.create({
        header: 'Approved',
        subHeader: '',
        message: 'Approved successfully',
        buttons: ['OK']
      });
      await alert.present();
      this.router.navigateByUrl("/adminhome")

    })
    

  }
  public reject(){
    var Dt = Date.now();
    this.authService.deleteworkeraccount({"userid":this.authService.id}).subscribe(res=>{
      console.log(res)
      this.authService.notification({"userid":this.authService.id,"content":"Admin rejected your request for worker account","from":"Admin","datetime":Dt,"notificationtype":"admin"}).subscribe(async res=>{
        console.log(res)
        const alert = await this.alertController.create({
          header: 'Rejected',
          subHeader: '',
          message: 'Rejected successfully',
          buttons: ['OK']
        });
        await alert.present();
      })
    })
  }

  ngOnInit() {
    this.authService.viewWorkerdetails({"userid":this.authService.id}).subscribe(res=>{
      console.log(res)
      
       jobs=[res];
    
       console.log(jobs)
       this.workerslist=jobs;
       console.log(this.workerslist)
       
       //this.workersdetails=jobs.workersdetails;
      //  console.log(this.workersdetails)

    })
  }

}

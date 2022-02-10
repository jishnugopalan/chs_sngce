import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var jobs:any
var n:any
@Component({
  selector: 'app-viewworker',
  templateUrl: './viewworker.page.html',
  styleUrls: ['./viewworker.page.scss'],
})
export class ViewworkerPage implements OnInit {

  constructor(private authService:AuthService,public toastController:ToastController,public alertController:AlertController) { }
  workerslist=[]
  review=""
  disable(){
    let workerid=this.authService.id
    var Dt = Date.now();

    this.authService.disableaccount({"userid":workerid}).subscribe((res:any)=>{
      console.log(res);
      this.authService.notification({"userid":workerid,"content":"Admin disabled your worker account due to complaints from users.Please wait for some days to activating your account","from":"Admin","datetime":Dt,"notificationtype":"admin"}).subscribe(async res=>{
        console.log(res)
        const alert = await this.alertController.create({
          header: '',
          subHeader: '',
          message: 'Disabled successfully',
          buttons: ['OK']
        });
        await alert.present();
      })
    })
  }
  activate(){
    let workerid=this.authService.id
    var Dt = Date.now();

    this.authService.activateaccount({"userid":workerid}).subscribe((res:any)=>{
      console.log(res);
      this.authService.notification({"userid":workerid,"content":"Admin activated your worker account","from":"Admin","datetime":Dt,"notificationtype":"admin"}).subscribe(async res=>{
        console.log(res)
        const alert = await this.alertController.create({
          header: '',
          subHeader: '',
          message: 'Activated successfully',
          buttons: ['OK']
        });
        await alert.present();
      })
    })
  }
 reject(){
    let workerid=this.authService.id
    var Dt = Date.now();
    this.authService.deleteworkeraccount({"userid":workerid}).subscribe(res=>{
      console.log(res)
      this.authService.notification({"userid":workerid,"content":"Admin deletd your worker account due to complaints from customers","from":"Admin","datetime":Dt,"notificationtype":"admin"}).subscribe(async res=>{
        console.log(res)
        const alert = await this.alertController.create({
          header: '',
          subHeader: '',
          message: 'Deleted successfully',
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
    this.authService.viewreview({"workerid":this.authService.id}).subscribe((res:any)=>{
      console.log(res)
      n=res
    this.review=n
    })
  }

}

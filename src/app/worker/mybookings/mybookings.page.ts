import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var w:any
var j:any
@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.page.html',
  styleUrls: ['./mybookings.page.scss'],
})
export class MybookingsPage implements OnInit {

  pages=[]
jobs=[]
public worker:boolean =false
public job:boolean =false
first=false
second=false
w=false;
  constructor(private authService:AuthService,private router:Router,public toastController: ToastController) { }
  public viewworker(){
    if(this.worker==true){
      console.log("enterd")
      this.authService.viewmybooking({"userid":this.authService.user.id}).subscribe(async res=>{
        console.log(res)
        w=res
        if(w.length==0)
        {
          const toast = await this.toastController.create({
            message: 'No bookings found',
            duration: 2000
          });
          toast.present();
        }
        this.pages=w
        this.first=true
         })
         this.job=false
         this.worker=true
    }
        
    
      }
      viewjobs(){
        if(this.job==true){
          this.authService.viewmybookedjobs({"workerid":this.authService.user.id}).subscribe(async res=>{
            console.log(res)
            j=res
            if(j.length==0)
            {
              const toast = await this.toastController.create({
                message: 'No Jobs found...',
                duration: 2000
              });
              toast.present();
            }
            this.jobs=j
            this.second=true
             })
             this.worker=false
             this.job=true
      
        }
        
      }
workerdetails(wid)
{
  console.log("eent")
  console.log(wid)
  this.authService.workerid=wid
  console.log(wid)
  //this.router.navigateByUrl("bookworker")

}
jobdetails(wid,bookingid)
{
  console.log("eent")
  console.log(wid)
  console.log(bookingid)
  this.authService.bookingid=bookingid
  this.authService.jid=wid
  this.router.navigateByUrl("/viewjobdetails")
}

  ngOnInit() {

    this.authService.viewifworker({"userid":this.authService.user.id}).subscribe(res=>{
      console.log(res)
     this.w=true
    })
    this.authService.viewmybookedjobs({"workerid":this.authService.user.id}).subscribe(async res=>{
      console.log(res)
      j=res
      if(j.length==0)
      {
        const toast = await this.toastController.create({
          message: 'No Jobs found...',
          duration: 2000
        });
        toast.present();
      }
      this.jobs=j
      
       })
       

  }

}

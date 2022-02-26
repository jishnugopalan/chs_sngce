import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-bookedworkers',
  templateUrl: './bookedworkers.page.html',
  styleUrls: ['./bookedworkers.page.scss'],
})
export class BookedworkersPage implements OnInit {
details=[]
  constructor(private authService:AuthService,private router:Router,public toastController: ToastController) { }

  addreview(workerid){
  console.log(workerid)
  this.authService.workerid=workerid
  this.router.navigateByUrl("addreview")
  }
  viewbill(bookingid,workerid){
    this.authService.bookingid=bookingid;
    this.authService.workerid=workerid;
    //this.authService.userid=userid;
    this.router.navigateByUrl("viewbill")

    
   }
   cancelRequest(bookingid){
     this.authService.cancelbooking({"bookingid":bookingid}).subscribe(async (res:any)=>{
       console.log(res)
       const toast = await this.toastController.create({
        message: 'Booking cancelled successfully',
        duration: 2000
      });
      toast.present();
      this.ngOnInit()
       
     })
   }
   addcomplaint(workerid){
    console.log(workerid)
    this.authService.workerid=workerid
    this.router.navigateByUrl("complaints")
   }
  ngOnInit() {
    this.authService.viewmybookedworkers({"userid":this.authService.user.id}).subscribe((res:any)=>{
      console.log(res)
      this.details=res
    })
  }
  chatnow(userid){

    console.log(userid)
    this.authService.chatid=userid
    this.router.navigateByUrl("chat")
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-myjobs',
  templateUrl: './myjobs.page.html',
  styleUrls: ['./myjobs.page.scss'],
})
export class MyjobsPage implements OnInit {
details=[]
  constructor(private authService:AuthService,private router:Router,public toastController: ToastController) { }
  chatnow(userid){

    console.log(userid)
    this.authService.chatid=userid
    this.router.navigateByUrl("chat")
  }
  addbill(userid,bookingid){
   this.authService.bookingid=bookingid;
   this.authService.userid=userid;
   this.router.navigateByUrl("sendbill")
   
  }
  complete(bookingid){
   console.log(bookingid)
   this.authService.markascomplete({"bookingid":bookingid}).subscribe(async (res:any)=>{
     console.log(res)
     const toast = await this.toastController.create({
      message: 'Marked as completed',
      duration: 2000
    });
    toast.present();
    this.ngOnInit()

   })
  }

  ngOnInit() {
    this.authService.viewacceptedjobs({"workerid":this.authService.user.id}).subscribe((res:any)=>{
      console.log(res)
      this.details=res
    })
  }

}

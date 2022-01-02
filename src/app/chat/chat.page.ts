import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
var a:any
var l:any
var b:any
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
pages=[]
newMsg='';
name=""
pic=""
m=this.authService.user.id
  f=this.authService.chatid
  constructor(private authService:AuthService,private router:Router,public toastController: ToastController,public loadingController: LoadingController) { }

public sendmsg()
{
  var Dt = Date.now();
  console.log(this.newMsg)
  this.authService.chatmsg({"myid":this.authService.user.id,"friendid":this.authService.chatid,"message":this.newMsg,"datetime":Dt}).subscribe(res=>{
    console.log(res)
    b=[res]
   
       this.pages.push(b[0]);
      this.newMsg=''
 
  })
  
  
  
}
  async ngOnInit() {
     
    this.authService.viewprofile({"_id":this.authService.chatid}).subscribe((res:any)=>{
      console.log(res)
      this.name=res.name;
      this.pic=res.profile_pic

    })
    this.authService.viewchat({"myid":this.authService.user.id,"friendid":this.authService.chatid,"myid1":this.authService.chatid,"friendid1":this.authService.user.id}).subscribe(async res=>{
      console.log(res)
      const loading = await this.loadingController.create({
        message: 'Please wait...',
        translucent: true,
      });
      await loading.present();
      a=res;
      l=a.length;
      for(var i=0;i<a.length;i++)
      {
       this.pages.push(a[i]);
      }
    loading.dismiss()

       
    })
  }

}

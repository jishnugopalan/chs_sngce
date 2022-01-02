import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var star:any
@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.page.html',
  styleUrls: ['./addreview.page.scss'],
})
export class AddreviewPage implements OnInit {
worker=[]
commend=""
  constructor(private authService:AuthService,private router:Router,public toastController: ToastController) { }

  public sendreview(){
    if(this.commend.length!=0){
      var d=Date.now()
      this.authService.addreview({"userid":this.authService.user.id,"workerid":this.authService.workerid,"star":star,"commend":this.commend,"datetime":d}).subscribe(async res=>{
        console.log(res)
        const toast = await this.toastController.create({
          message: 'Rated successfully.',
          duration: 2000
        });
        toast.present();
      })
    }
  
  }
  public starmark(item)
  {
    star=item
    var count
    console.log(item)
  count=item;
  sessionStorage.starRating = count;
  var subid= item;
  for(var i=0;i<5;i++)
  {
  if(i<count)
  {
    //var s=document.getElementById((i+1)+subid)
    //console.log(s)
    //console.log((i+1)+'rt')
  document.getElementById((i+1)+'rt').style.color="orange";
  }
  else
  {
  document.getElementById((i+1)+'rt').style.color="black";
  }
  
  
  }
  
  }
  ngOnInit() {
    this.authService.viewprofile({"_id":this.authService.workerid}).subscribe((res:any)=>{
      console.log(res)
      this.worker=[res]
    })
  }

}

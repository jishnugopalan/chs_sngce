import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
not=[]
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authService.viewnotification({"userid":this.authService.user.id}).subscribe((res:any)=>{
      console.log(res)
      this.not=res
    })
    this.authService.updatenotification({"userid":this.authService.user.id}).subscribe((res:any)=>{
      console.log(res)
      

    })
    
  }

}

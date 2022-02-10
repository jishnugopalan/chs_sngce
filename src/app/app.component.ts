import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  user=false
  admin=false
  worker=false


  name:any
  profile_pic:any
  email:any
  public UserPages = [
    { title: 'Home', url: 'demo', icon: 'home' },
    { title: 'Become Worker', url: 'workeraccout', icon: 'briefcase' },
    // { title: 'Jobs', url: 'joblist', icon: 'bag' },
    { title: 'My Workers', url: 'bookedworkers', icon: 'person' },
    { title: 'Notifications', url: 'notification', icon: 'notifications' },
    { title: 'Complaints', url: 'viewcomplaints', icon: 'ticket' },
    { title: 'Settings', url: 'settings', icon: 'settings' },
    { title: 'About', url: 'about', icon: 'information' },

    
  
  ]
  public AdminPages=[
    { title: 'Home', url: 'adminhome', icon: 'home' },
    { title: 'Add Category', url: 'addcategory', icon: 'add-circle' },
    { title: 'Approve Workers', url: 'viewworkers', icon: 'pencil' },
    { title: 'Complaints', url: 'viewcomplaintbyadmin', icon: 'ticket' },
    { title: 'Settings', url: 'settings', icon: 'settings' },
    { title: 'About', url: 'about', icon: 'information' },

  ]

  public WorkerPages = [
    { title: 'Home', url: 'demo', icon: 'home' },
    // { title: 'Jobs', url: 'joblist', icon: 'bag' },
    { title: 'My Bookings', url: 'mybookings', icon: 'bag-check' },
    { title: 'My Jobs', url: 'myjobs', icon: 'hammer' },
    { title: 'My Workers', url: 'bookedworkers', icon: 'person' },
    // { title: 'My Earnings', url: 'myearnings', icon: 'cash' },
    { title: 'Notifications', url: 'notification', icon: 'notifications' },
    { title: 'Complaints', url: 'viewcomplaints', icon: 'ticket' },
    { title: 'Update Worker Details', url: 'updatedetails', icon: 'person-circle' },

    { title: 'Settings', url: 'settings', icon: 'settings' },

    { title: 'About', url: 'about', icon: 'information' },
   
  ]


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }
count
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      

      this.authService.authenticationState.subscribe(state => {
        if (state) {
          this.authService.countnotification({"userid":this.authService.user.id}).subscribe((res:any)=>{
            console.log(res)
            this.count=res
          })
          let userinfo=this.authService.user
          this.authService.profile_pic=userinfo.profile_pic
          this.authService.name=userinfo.name
          if(userinfo.usertype=="user"){
            console.log(userinfo.usertype)
            this.user=true
            this.admin=false
            this.worker=false

            this.name=this.authService.name
            this.profile_pic=this.authService.profile_pic
            this.email=this.authService.user.email
            this.router.navigate(['demo']);


          }
          else if(userinfo.usertype=="worker"){
            console.log(userinfo.usertype)
            console.log(userinfo.usertype)
            this.user=false
            this.admin=false
            this.worker=true

            this.name=this.authService.name
            this.profile_pic=this.authService.profile_pic
            this.email=this.authService.user.email
            this.router.navigate(['demo']);

          }
          else if(userinfo.usertype=="admin"){
            console.log(userinfo.usertype)
            console.log(userinfo.usertype)
            this.admin=true
            this.user=false
            this.worker=false

            this.name=this.authService.name
            this.profile_pic=this.authService.profile_pic
            this.email=this.authService.user.email
            this.router.navigate(['adminhome']);

          }
        } else {
          this.router.navigate(['home']);
        }
    });
  });
}
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
var a:any
var loclat:any
var loclong:any
declare var google;

@Component({
  selector: 'app-viewjobdetails',
  templateUrl: './viewjobdetails.page.html',
  styleUrls: ['./viewjobdetails.page.scss'],
})
export class ViewjobdetailsPage implements OnInit {
  pages=[]
  details=[]
  @ViewChild('mapElement',{ static: true }) mapNativeElement: ElementRef;
  constructor(private authService:AuthService,private router:Router,private geolocation: Geolocation,public toastController: ToastController) { }

  accept(){
  
   this.authService.acceptworker({"_id":this.authService.bookingid}).subscribe(async (res:any)=>{
     console.log(res)
     const toast = await this.toastController.create({
      message: 'Work accepted successfully',
      duration: 2000
    });
    toast.present();
    this.router.navigateByUrl("myjobs")
   })
  }
  reject(){
    this.authService.rejectbooking({"bookingid":this.authService.bookingid}).subscribe(async (res:any)=>{
      console.log(res)
      const toast = await this.toastController.create({
       message: 'Work rejected',
       duration: 2000
     });
     toast.present();
     ///this.router.navigateByUrl("mybookings")
     this.ngOnInit()
    })
   }
  ngOnInit() {

   this.authService.viewworkdetails({"bookingid":this.authService.bookingid}).subscribe((res:any)=>{
     console.log(res)
     this.details=[res]
   })
    this.authService.viewprofile({"_id":this.authService.jid}).subscribe((res:any)=>{
      console.log(res)
      a=[res]
      this.pages=a
    })
    this.authService.viewlocation({"userid":this.authService.jid}).subscribe((res:any)=>{
      console.log(res)
      loclat=res.latitude
      loclong=res.longitude
    })
  }
  ngAfterViewInit(): void {

    const myLatLng = { lat: parseFloat(loclat), lng:parseFloat(loclong) };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });
  const contentString = 'Location'
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker=new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
    
  }

}

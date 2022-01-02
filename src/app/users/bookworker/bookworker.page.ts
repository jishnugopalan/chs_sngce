import { AuthService } from '../../services/auth.service';
import { Component,AfterViewInit, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { async } from 'rxjs/internal/scheduler/async';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Subscription } from 'rxjs';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
var loclat:any;
var loclong:any;
var n:any
declare var google;
@Component({
  selector: 'app-bookworker',
  templateUrl: './bookworker.page.html',
  styleUrls: ['./bookworker.page.scss'],
})
export class BookworkerPage implements OnInit {
  latitude=''
  longitude=''
  workersdetails=[];
  currentMapTrack = null;

  //@ViewChild('map', { static: false }) mapElement: ElementRef;
  @ViewChild('mapElement',{ static: true }) mapNativeElement: ElementRef;
  
  map: any;
  
  pos:any
  isTracking = false;
  trackedRoute = [];
  previousTracks = [];
  review=[]
 
  positionSubscription: Subscription;
  
  note=false;
  
  
  
  mapElement:any;
  s=false;

  constructor(private authService:AuthService,private router:Router,public alertController: AlertController,private geolocation: Geolocation,private nativeGeocoder: NativeGeocoder) { }

  async bookworker(id){
 console.log(id)
 if(id==this.authService.user.id){
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Sorry',
    message: 'You cannot book this person',
    buttons: ['OK']
  });
  await alert.present();
}
else{
  this.authService.bookworker({"userid":this.authService.user.id,"workerid":id}).subscribe(async (res:any)=>{
    console.log(res)
    var bookingid=res._id;
    console.log(bookingid)
    this.s=true
    console.log(this.s)
    if(this.s==true){

      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Requested Successfully',
        message: 'You are successfully requested for the service',
        buttons: ['OK']
      });
      await alert.present();
      var Dt = Date.now();
      console.log(Dt);
      this.authService.notification({"userid":id,"content":'Requested for your service',"from":this.authService.name,"datetime":Dt,"bookingid":bookingid,"notificationtype":"booked"}).subscribe(res=>{
        console.log(res)
      })
      this.s=false
    }
  })
}
  }

  // loadMap() {
  //   this.geolocation.getCurrentPosition().then((resp) => {

  //     // this.latitude = resp.coords.latitude;
  //     // this.longitude = resp.coords.longitude;

  //     let latLng = new google.maps.LatLng(this.latitude, this.longitude);
  //     let mapOptions = {
  //       center: latLng,
  //       zoom: 15,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP
  //     }

  //     // this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

  //     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  //     // this.map.addListener('dragend', () => {

  //     //   this.latitude = this.map.center.lat();
  //     //   this.longitude = this.map.center.lng();

  //     //   this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
  //     // });

  //   }).catch((error) => {
  //     console.log('Error getting location', error);
  //   });
  // }

  ngOnInit() {
    console.log(this.authService.myworkers)
 this.workersdetails=this.authService.myworkers;
 console.log(this.workersdetails[0].available_status)
 var workerid=this.authService.workerid;
 console.log(workerid)
 console.log(this.workersdetails[0].profile_pic)
 this.authService.viewlocation({"userid":workerid}).subscribe((res:any)=>{
  console.log(res)
  loclat=res.latitude
  loclong=res.longitude
  console.log(loclat)
  console.log(loclong)

  this.latitude = res.latitude;
      this.longitude = res.longitude;
    //  this.loadMap();
     
})
this.authService.viewreview({"workerid":this.authService.workerid}).subscribe((res:any)=>{
  console.log(res)
  n=res
this.review=n
})
  }

  ngAfterViewInit(): void {

    const myLatLng = { lat: parseFloat(loclat), lng:parseFloat(loclong) };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });
  const contentString = '<ion-tem><ion-avatar slot="start">'+ '<img src="'+this.workersdetails[0].profile_pic+'">'+
  '</ion-avatar>'+'<ion-label>'+this.workersdetails[0].name+'</ion-label></ion-tem>'
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

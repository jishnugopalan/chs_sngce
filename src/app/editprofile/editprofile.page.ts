import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
var image:any
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
profile=[]
n=false
e=false
p=false
  constructor(private authService:AuthService,private router:Router,public toastController: ToastController,private formBuilder: FormBuilder,) { }
  
  nameForm: any;
  emailForm: any;
  phoneForm: any;
  setname(){
    this.n=true;
  }
  setemail(){
    this.e=true
  
  }
  setphone(){
  this.p=true
  }

  updatename(){
    this.authService.updatename({"userid":this.authService.user.id,"name":this.nameForm.value.name}).subscribe(async (res:any)=>{
      console.log(res)
      const toast = this.toastController.create({
        message: 'Name changed successfully',
        duration: 2000,
        position: 'middle'
      });
  
    
      (await toast).present();
      this.ngOnInit()
  
    })
  }
  updateimage(){
    console.log(image)
    if(image!=undefined){
        this.authService.profile_pic=image

      this.authService.updateimage({"userid":this.authService.user.id,"image":image}).subscribe(async (res:any)=>{
        console.log(res)
        const toast = this.toastController.create({
          message: 'Profile pic changed successfully',
          duration: 2000,
          position: 'middle'
        });
      
        (await toast).present();
        this.ngOnInit()
        //appInitialize
      })
    
  
    }
    
  }
  updatephone(){
    this.authService.updatephone({"userid":this.authService.user.id,"phone":this.phoneForm.value.phone}).subscribe(async (res:any)=>{
      console.log(res)
      const toast = this.toastController.create({
        message: 'Phone number changed successfully',
        duration: 2000,
        position: 'middle'
      });
  
    
      (await toast).present();
      this.ngOnInit()
  
    })
  }
  async encodeImageFileAsURL() {
    console.log("err")
    console.log("err")
    image="empty"
    var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
    var filesSelected = document.getElementById("inputFileToLoad")["files"];
    var fileInput = document.getElementById('inputFileToLoad');
    var filePath = fileInput["value"];
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(!allowedExtensions.exec(filePath)){
        // alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
        fileInput["value"] = '';
        image="empty"
      // return false;
        const toast = await this.toastController.create({
          message: 'Please upload file having extensions .jpeg/.jpg/.png/.gif only.',
          duration: 2000
        });
        toast.present();
    
      }
      else{
  
        console.log(filesSelected.length)
        if (filesSelected.length > 0) {
          var fileToLoad = filesSelected[0];
    
          var fileReader = new FileReader();
    
          fileReader.onload = function(fileLoadedEvent) {
            var srcData = fileLoadedEvent.target["result"]; // <--- data: base64
            image=srcData;
            console.log(image)
          }
          fileReader.readAsDataURL(fileToLoad);
        }
      }
  }

  ngOnInit() {
    this.nameForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100),Validators.minLength(3)]],
    })
    this.emailForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
        ]
      ]
    })
    this.phoneForm = this.formBuilder.group({
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
          Validators.maxLength(10),
          Validators.minLength(10)
          
        ]
      ],
    })
    this.authService.viewprofile({"_id":this.authService.user.id}).subscribe((res:any)=>{
      console.log(res)
      this.profile=[res]
    })
  }

}

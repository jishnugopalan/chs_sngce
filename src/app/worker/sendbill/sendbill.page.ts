import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var image
@Component({
  selector: 'app-sendbill',
  templateUrl: './sendbill.page.html',
  styleUrls: ['./sendbill.page.scss'],
})
export class SendbillPage implements OnInit {
user=[]
total=0
bill=[]
  constructor(private authService:AuthService,private router:Router,public toastController: ToastController,private formBuilder: FormBuilder) { }

form=this.formBuilder.group({
  toolname: ['', [Validators.required, Validators.maxLength(30),Validators.minLength(1)]],
  rate: [
    '',
    [
      Validators.required,
      Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
      Validators.maxLength(4),
      Validators.minLength(1)
      
    ]
  ]

})

async encodeImageFileAsURL() {
  console.log("err")
  console.log("err")
  var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
  var filesSelected = document.getElementById("inputFileToLoad")["files"];
  var fileInput = document.getElementById('inputFileToLoad');
  var filePath = fileInput["value"];
  var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  if(!allowedExtensions.exec(filePath)){
      // alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
      fileInput["value"] = '';
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
uploadimage(){
  this.authService.addbillimage({"bookingid":this.authService.bookingid,"billimage":image}).subscribe(async (res:any)=>{
    console.log(res)
    const toast = await this.toastController.create({
      message: 'Bill image uploaded successfully',
      duration: 2000
    });
    toast.present();
    this.ngOnInit()
  })
}
onSubmit(){
  this.form.value.userid=this.authService.userid
  this.form.value.bookingid=this.authService.bookingid
  this.form.value.workerid=this.authService.user.id
  console.log(this.form.value)
  this.authService.addbill(this.form.value).subscribe(async (res:any)=>{
    console.log(res)
    const toast = await this.toastController.create({
      message: 'Bill added successfully',
      duration: 2000
    });
    toast.present();
    this.ngOnInit()

  })

}
deleteBill(billid){
console.log(billid);
this.authService.deletebill({"billid":billid}).subscribe(async (res:any)=>{
  console.log(res)
  const toast = await this.toastController.create({
    message: 'One item deleted from bill',
    duration: 2000
  });
  toast.present();
  this.ngOnInit()

})
}
  ngOnInit() {
    this.authService.viewprofile({"_id":this.authService.userid}).subscribe((res:any)=>{
      console.log(res)
     this.user=[res]
    })
    this.total=0

    this.authService.viewbill({"bookingid":this.authService.bookingid}).subscribe((res:any)=>{
      console.log(res)
      this.bill=res

      for(let i=0;i<res.length;i++){
        this.total=this.total+res[i].rate
      }
    })
  }

}

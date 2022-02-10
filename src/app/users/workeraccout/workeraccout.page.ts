import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var jobs:any
var image:any
@Component({
  selector: 'app-workeraccout',
  templateUrl: './workeraccout.page.html',
  styleUrls: ['./workeraccout.page.scss'],
})
export class WorkeraccoutPage implements OnInit {
  joblist=[];
 workerForm:FormGroup
 files=''
  count: Object;
jtype=[]
options = [
  {name:'One Day Work', value:'One Day Work', checked:true},
  {name:'Contract Based', value:'Contract Based', checked:false},
  {name:'Full Time', value:'Full Time', checked:true}
]
  constructor(private authService:AuthService,public router: Router, public formbuilder: FormBuilder,public toastController: ToastController,public alertController: AlertController) { 
    this.workerForm = this.formbuilder.group({
      job_category: ['', [Validators.required]],
      job_start_time: ['', [Validators.required]],
      job_end_time: ['', [Validators.required]],
      job_salary: ['', [Validators.required]],
      job_verification: ['', [Validators.required]],
       //job_document: ['', [Validators.required]],
      job_description: ['', [Validators.required]],
      keyid:['',Validators.required],
      jobtype:['',Validators.required]
  });
}
get job_category(){
  return this.workerForm.get('job_category');
}
get job_start_time(){
  return this.workerForm.get('job_start_time');
}
get job_end_time(){
  return this.workerForm.get('job_end_time');
}
get job_salary(){
  return this.workerForm.get('job_salary');
}
get job_verification(){
  return this.workerForm.get('job_verification');
}
// get job_document(){
//   return this.workerForm.get('job_document');
// }
get job_description(){
  return this.workerForm.get('job_description');
}
get keyid(){
  return this.workerForm.get('keyid');
}
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
public submit(){
  for(let i=0;i<this.options.length;i++){
    if(this.options[i].checked==true){
      console.log(this.options[i].name)
      this.jtype.push(this.options[i].name)
    }
  }
  this.workerForm.value.jobtype=this.jtype
  console.log(this.workerForm.value);
  var data=this.workerForm.value;
  //console.log(this.authService.logid)
  data=Object.assign(data,{"userid":this.authService.user.id,"job_document":image,"admin_status":'0'})
  console.log(data)
  this.authService.addworker(data).subscribe(async res=>{
    console.log(res)
    const alert = await this.alertController.create({
      header: 'Documents uploaded successfully',
      subHeader: '',
      message: 'You need to wait for admin approval',
      buttons: ['OK']
    });
    await alert.present();
  })
}

  ngOnInit() {
    // this.authService.viewifworker({"userid":this.authService.user.id}).subscribe(async res=>{
    //   const alert = await this.alertController.create({
    //     header: 'Alert',
    //     subHeader: 'Oops!',
    //     message: 'You are already a worker',
    //     buttons: ['OK']
    //   });
    //   await alert.present();
    //   this.router.navigateByUrl("/adminhome")
    // })
    this.authService.viewcategory('').subscribe(res=>{
      console.log(res)
      
       jobs= res;
    
       console.log(jobs)
       this.joblist=jobs;

       
    })
  }

}

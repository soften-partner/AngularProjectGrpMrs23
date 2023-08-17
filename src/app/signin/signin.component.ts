import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  
  inputForm!:FormGroup;

constructor(private fb:FormBuilder, private route:Router, private userServ:UserService)
{

}
ngOnInit(): void {
    
  this.inputForm= this.fb.group(

    {"inputemail":["",[ Validators.required, Validators.email]],
    "inputpassword":["", Validators.required]
  }
  )
}
onsubmit()
{
  console.log(this.inputForm)
  console.log(this.inputForm.controls['inputemail'].value)

  if(this.inputForm.valid)
  {
    console.log("formulaire valide !!!!!")
    this.userServ.connect(this.inputForm.controls['inputemail'].value,this.inputForm.controls['inputpassword'].value).subscribe(

      (authRes)=>{

        console.log("first name de test d'authentification "+authRes.user.firstName)
        console.log("Token de test d'authentification "+authRes.accessToken)

        this.userServ.saveuser(authRes.user, authRes.accessToken);
      }
    )
    
    this.route.navigate(['/']);
  }
  else{
    console.log("formulaire non vakide !!!!")
  }
}
}

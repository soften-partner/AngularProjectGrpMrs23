import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  
  inputForm!:FormGroup;

constructor(private fb:FormBuilder, private route:Router )
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
    this.route.navigate(['/listusers']);
  }
  else{
    console.log("formulaire non vakide !!!!")
  }
}
}

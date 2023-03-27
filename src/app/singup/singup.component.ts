import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { user } from '../models/user.model';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  inputForm!:FormGroup
  constructor( private fb: FormBuilder, private userServ:UserService)
  {

  }

  ngOnInit(): void {
      
    this.inputForm= this.fb.group(
      {"inputfname":["",Validators.required], 
       "inputlname":["",Validators.required],
      "inputemail":["",[Validators.required, Validators.email] ],
      "inputpassword":["",Validators.required],
    "confpassword":["",Validators.required],
    "inputAdresse":["",Validators.required]
  }
    )
  }

  adduser()
  {
    let usr= new user();
    usr.firstname=this.inputForm.controls['inputfname'].value
    usr.lastname=this.inputForm.controls['inputlname'].value
    usr.email=this.inputForm.controls['inputemail'].value
    usr.password=this.inputForm.controls['inputpassword'].value
    usr.confirmpassword=this.inputForm.controls['confpassword'].value
    usr.adresse=this.inputForm.controls['inputAdresse'].value

    this.userServ.adduser(usr).subscribe(
      (u)=>{

        console.log(u.firstname)
      }
    )

  }
}

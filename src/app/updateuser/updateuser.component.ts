import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { user } from '../models/user.model';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  inputForm!: FormGroup

iduser!:number;
constructor(private actroute:ActivatedRoute, private userServ:UserService , private fb:FormBuilder)
{

}

  ngOnInit(): void {
      
this.inputForm= this.fb.group(

  {
      "inputfname":[""],
      "inputlname":[""],
      "inputemail":[""],
      "inputpassword":[""],
      "confpassword":[""],
      "inputAdresse":[""]
  }


)
    
    this.actroute.params.subscribe(
      (param)=>{

        console.log("parametre passer "+param['id'])
        this.iduser=param['id'];
        this.userServ.getuserbyid(param['id']).subscribe(


          (usr)=>{

            console.log(usr.firstname)
            this.inputForm.controls['inputfname'].setValue(usr.firstname)
            this.inputForm.controls['inputlname'].setValue(usr.lastname)
            this.inputForm.controls['inputemail'].setValue(usr.email)
            this.inputForm.controls['inputpassword'].setValue(usr.password)
            this.inputForm.controls['confpassword'].setValue(usr.confirmpassword)
            this.inputForm.controls['inputAdresse'].setValue(usr.adresse)
          }
        )
      }
    )

  }
  updateuser()
  {
   let usr= new user()

   usr.firstname= this.inputForm.controls['inputfname'].value
   usr.lastname=this.inputForm.controls['inputlname'].value
   usr.email=this.inputForm.controls['inputemail'].value
   usr.password=this.inputForm.controls['inputpassword'].value
   usr.confirmpassword=this.inputForm.controls['confpassword'].value
   usr.adresse=this.inputForm.controls['inputAdresse'].value
//console.log(this.iduser)
    this.userServ.updateuser(this.iduser,usr ).subscribe(

      (altuser)=>{

        console.log(altuser.firstname)
      }
    )
  }
}

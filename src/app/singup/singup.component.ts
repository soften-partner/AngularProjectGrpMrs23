import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { user } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  sportsList = [
    {
      id:1,
      name:'sport',
      value:'cricket',
      label:'Cricket'
    },{
      id:2,
      name:'sport',
      value:'football',
      label:'Football'
    },{
      id:3,
      name:'sport',
      value:'swimming',
      label:'Swimming'
    },{
      id:4,
      name:'sport',
      value:'hockey',
      label:'Hockey'
    }
  ]

  /*myform = new FormGroup({
    sport: new FormControl('', Validators.required)
  });*/

  get f(){
    return this.inputForm.controls;
  }
  submit(){
    console.log(this.inputForm.controls['myformRadio'].valid);
    //console.log(this.inputForm.controls['myformRadio'].value);
   // console.log(this.inputForm.controls['myformRadio'].get('sport')?.value);
  }

  onRadioChange(sport: any) {
    console.log(sport);
 }
  inputForm!:FormGroup
 // myform!:FormGroup;
  sexevalue:any=['male','female']

  public list: any = [
    { label: 'Sport', value: false },
    { label: 'Reading', value: true },
    ];

  constructor( private fb: FormBuilder, private userServ:UserService, private route:Router)
  {

  }

  ngOnInit(): void {
      
    this.inputForm= this.fb.group(
      {"inputfname":["",Validators.required], 
       "inputlname":["",Validators.required],
      "inputemail":["",[Validators.required, Validators.email] ],
      "inputpassword":["",Validators.required],
    "confpassword":["",Validators.required],
    "inputAdresse":["",Validators.required],
     sexe:[''],
     selected: this.fb.array(this.loadCheckboxes1()),
     myformRadio:this.fb.group(
      {
        sport:['', Validators.required]
      }
     )
  }
    )
  }
  loadCheckboxes1() {
    return this.list.map( (item: any) => {
    return this.fb.group({ 

         [`${item.label}`]: [false] });
    });
    }


    
  adduser()
  {
    let usr= new user();
    usr.firstName=this.inputForm.controls['inputfname'].value
    usr.lastName=this.inputForm.controls['inputlname'].value
    usr.email=this.inputForm.controls['inputemail'].value
    usr.password=this.inputForm.controls['inputpassword'].value
    usr.confirmpassword=this.inputForm.controls['confpassword'].value
    usr.adresse=this.inputForm.controls['inputAdresse'].value

    this.userServ.adduser(usr).subscribe(
      (u)=>{

        //console.log(u.firstName)
        console.log(u.user.firstName)
        console.log(u.accessToken)

      }
    )
this.route.navigate(['/listusers'])
  }


}

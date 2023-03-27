import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { user } from '../models/user.model';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  //tabusername=['ali','med','sami','samir','khaled']

  tabusers:user[]=[];
  constructor(private route:Router, private userServ:UserService)
  {

  }
  ngOnInit(): void {
      
    this.userServ.getAllusers().subscribe(

      (tabu)=>{

        this.tabusers=tabu;
      }
    )


  }
  updateUser(id:number)
  {
   this.route.navigate(['/updateuser',id]) 
  }
  deleteuser(id:number)
  {
      this.userServ.deleteuser(id).subscribe(
        (usr)=>{

            this.userServ.getAllusers().subscribe(

              (listu)=>{
                this.tabusers=listu;

              }
            )
          
        }
      )

      this.route.navigate(['/listusers'])
  }

}

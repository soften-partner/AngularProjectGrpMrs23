import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  testinterpo="bonjour";
  testclr="background-color: blue;"
counter!:number;
  testtwb="hello it's about two way binding!!"
  constructor(private userServ: UserService)
  {

  }

  ngOnInit(): void {
      
  }

  incrimenter()
  {
    this.userServ.incriment();
    this.counter= this.userServ.count;
  }
}

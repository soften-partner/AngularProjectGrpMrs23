import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userServ:UserService, private route:Router)
  {

  }

  ngOnInit(): void {
      
  }

  logout()
  {
    this.userServ.logout();
    this.route.navigate(['/signin'])

  }
  isConnected()
  {

    return this.userServ.isConnected();
  }

  isAdmin()
  {
    return this.userServ.isAdmin();
  }
}

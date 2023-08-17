import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { user } from '../models/user.model';
import { environement } from 'src/environements/environement';
import { authresponse } from '../models/authresponse';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  behavsub = new BehaviorSubject(0);

  count=0;
  constructor(private http: HttpClient) {

    this.behavsub.subscribe(

      (val)=>{

        this.count=val;
      }
    )

   }


   incriment()
   {

    this.behavsub.next(this.count+1);
   }

   getAllusers():Observable<user[]>
   {
     // return this.http.get<user[]>(environement.host+"/users");
    return this.http.get<user[]>(environement.host+"/getAllUsers");
     
   }

   getuserbyid(id:number):Observable<user>
   {
    return this.http.get<user>(environement.host+"/users/"+id);
   }


   updateuser(id: number, usr:user):Observable<user> {


    return this.http.put<user>(environement.host+"/users/"+id,usr);
  //  throw new Error('Method not implemented.');
  }

  /*deleteuser(id:number):Observable<user>
  {
       return this.http.delete<user>(environement.host+"/users/"+id);
  }*/
  deleteuser(id:number)
  {
       return this.http.delete(environement.host+"/deletUser/"+id,{responseType:'text'});
  }
 /* adduser(usr: user):Observable<user>
  {
    console.log(usr.firstName)
    return this.http.post<user>(environement.host+"/users/",usr);
  }*/

  adduser(usr: user):Observable<authresponse>
  {
    console.log(usr.firstName)
    return this.http.post<authresponse>(environement.host+"/users/",usr);
  }

  connect(email:string, password:string):Observable<authresponse>
  {
    return this.http.post<authresponse>(environement.host+"/login/",{email:email,password:password});
  }

  saveuser(user:user,accessToken:string)
  {
    localStorage.setItem("user",JSON.stringify( user));
    localStorage.setItem("jwt",accessToken)
  }
  logout()
  {
    localStorage.clear();
  }

  isConnected()
  {
    if(localStorage.getItem("jwt")!=null)
    return true
    else
    return false
  }

  isAdmin()
  {
    var usr:user=JSON.parse( localStorage.getItem("user")!)
    if(user!=null)
    {
       return usr.role=='Admin';
    }
   
    else
    return false;
  }
}

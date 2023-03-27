import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { user } from '../models/user.model';
import { environement } from 'src/environements/environement';


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
       return this.http.get<user[]>("http://localhost:3000/users");
   }

   getuserbyid(id:number):Observable<user>
   {
    return this.http.get<user>("http://localhost:3000/users/"+id);
   }


   updateuser(id: number, usr:user):Observable<user> {


    return this.http.put<user>("http://localhost:3000/users/"+id,usr);
  //  throw new Error('Method not implemented.');
  }

  deleteuser(id:number):Observable<user>
  {
       return this.http.delete<user>(environement.host+"/users/"+id);
  }

  adduser(usr: user):Observable<user>
  {
    return this.http.post<user>(environement.host+"/users/",usr);
  }
}

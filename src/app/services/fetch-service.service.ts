import { userDataInterface } from './../interfaces/userData.interface';
import { Injectable } from '@angular/core';
import {userInterface} from './../interfaces/user.interface'

@Injectable({
  providedIn: 'root'
})
export class FetchServiceService {

  constructor() { }

  userData: userInterface[] = []
  userCompAndAddressData: userDataInterface | undefined

  async getUserData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users',{
    credentials: 'include'
    });
    const data = await res.json()
    this.userData = data
    console.log(data)
  }

  async getUserCompAndAddress(id:number | undefined){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
      credentials: 'include'
    });
    const data = await res.json()
   this.userCompAndAddressData = data
   console.log(this.userCompAndAddressData)
  }


}

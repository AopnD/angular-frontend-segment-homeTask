import { userInterface } from './../../interfaces/user.interface';
import { userDataInterface } from './../../interfaces/userData.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FetchServiceService } from 'src/app/services/fetch-service.service';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css']
})
export class UsersInfoComponent implements OnInit {

  
  @Output() toggleInfoModal = new EventEmitter()
@Input()
user: userDataInterface | undefined
  
  constructor(public _FetchService: FetchServiceService) { }





hideInfoModal(){
  this.toggleInfoModal.emit()
  console.log(this._FetchService.userCompAndAddressData)
}


  ngOnInit(): void {
  }

}

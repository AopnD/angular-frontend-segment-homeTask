import { FetchServiceService } from './../../services/fetch-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']

})
export class MainComponent implements OnInit {

  constructor(public _fetchService: FetchServiceService) { }

  showInfo: boolean = false

  ngOnInit(): void {
this._fetchService.getUserData();
  }

  drop(event: CdkDragDrop<string[]>){
    moveItemInArray(this._fetchService.userData, event.previousIndex, event.currentIndex )

  }

rowClick(id: number | undefined){
this._fetchService.getUserCompAndAddress(id)
this.toggleInfoModalFunc()
  }

  toggleInfoModalFunc(){
    this.showInfo = !this.showInfo;
  }


}

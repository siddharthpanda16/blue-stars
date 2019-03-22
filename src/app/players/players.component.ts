import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
  providers: [NgbPopoverConfig] // add NgbPopoverConfig to the component providers

})
export class PlayersComponent implements OnInit {

  h1Style: boolean =false;
  users :Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data=> {
      this.users =data
    })
  }
}

export class NgbdPopoverBasic {
}
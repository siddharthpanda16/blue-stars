import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  games: Object =[{"tournament":"DCL T-20 Spring","gameday":"Saturday,16th March - 7:30 A.M.","opposition":"Blue Stars vs Curd Rice","venue":{"name":"DFW GROUND","url":"https://www.google.com/maps?ll=32.791381,-96.8347&z=16&t=m&hl=en-US&gl=US&mapclient=embed&daddr=3716+Sylvan+Ave+Dallas,+TX+75207@32.7913814,-96.8346997"}},
  {"tournament":"DCL T-20 Spring","gameday":"Saturday,16th March - 7:30 A.M.","opposition":"Blue Stars vs Curd Rice","venue":{"name":"DFW GROUND","url":"https://www.google.com/maps?ll=32.791381,-96.8347&z=16&t=m&hl=en-US&gl=US&mapclient=embed&daddr=3716+Sylvan+Ave+Dallas,+TX+75207@32.7913814,-96.8346997"}},
  {"tournament":"DCL T-20 Spring","gameday":"Saturday,16th March - 7:30 A.M.","opposition":"Blue Stars vs Curd Rice","venue":{"name":"DFW GROUND","url":"https://www.google.com/maps?ll=32.791381,-96.8347&z=16&t=m&hl=en-US&gl=US&mapclient=embed&daddr=3716+Sylvan+Ave+Dallas,+TX+75207@32.7913814,-96.8346997"}}];

  cards: Object=[ {"type":"Event","title":"Trophy Distribution","details":"Vaibhav for highest number of wickets, Shail for 5 wickets haul, Shail for hattrick","footer":"Sunday, March 17th 2019"},
  {"type":"Team Dinner","title":"Winning Celebration","details":"Summer 2018 DCL Division A Champions","footer":"Sunday, March 24th 2019"},
  {"type":"Practice","title":"Practice Game","details":"Practice Game before the game against the mighty Kings","footer":"Sunday, March 10th 2019"},
  {"type":"something","title":"Something else","details":"Something else Something else Something else Something else Something else ","footer":"Sunday, March 31st 2019"}];

  constructor() { }

  ngOnInit() {

  }

}

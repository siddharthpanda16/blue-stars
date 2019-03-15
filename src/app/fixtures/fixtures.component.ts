import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.scss']
})
export class FixturesComponent implements OnInit {

  games: Object =[{"id":1,"tournament":"DCL T-20 Spring","gameday":"Saturday,16th March - 7:30 A.M.","opposition":"Blue Stars vs Curd Rice","venue":"DFW GROUND","result":"win"},
  {"id":2,"tournament":"DCL T-20 Spring","gameday":"Saturday,16th March - 7:30 A.M.","opposition":"Blue Stars vs Curd Rice","venue":"DFW GROUND","result":""},
  {"id":2,"tournament":"DCL T-20 Spring","gameday":"Saturday,16th March - 7:30 A.M.","opposition":"Blue Stars vs Curd Rice","venue":"DFW GROUND","result":"lose"},
  {"id":3,"tournament":"DCL T-20 Spring","gameday":"Saturday,16th March - 7:30 A.M.","opposition":"Blue Stars vs Curd Rice","venue":"DFW GROUND","result":""}];

  constructor() { }

  ngOnInit() {
  }

}

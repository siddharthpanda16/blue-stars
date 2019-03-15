import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  headerBtns: Object =[{"name":"Contact","id":"contactSideMenu","hrefVal":"/contact"},{"name":"Sign Up","id":"registerSideMenu","hrefVal":"/register"},{"name":"Sign In","id":"loginSideMenu","hrefVal":"/login"}];
  headerMenuBtns: Object = [{"name":"HOME","id":"homeMenu","hrefVal":"/"},{"name":"PLAYERS","id":"playersMenu","hrefVal":"/players"},
                            /* {"name":"NEWS","id":"newsMenu","hrefVal":"/news"},*/{"name":"DCL","id":"dclMenu","hrefVal":"http://www.dallascricket.net"}, 
                            {"name":"LIVE SCORE","id":"liveScoreMenu","hrefVal":"http://www.dallascricket.net/Main/LiveScore.aspx"},{"name":"FIXTURES","id":"fixtureMenu","hrefVal":"/fixtures"},{"name":"MORE","id":"moreMenu","hrefVal":"/more"}];

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
        var alterClass = function() {
          var ww = document.body.clientWidth;
          if (ww < 1000) {
            $('#home-nav-dropdown').removeClass('nav-item dropdown');
            $('#home-nav-dropdown').addClass('btn-group dropright');
          } else if (ww >= 1001) {
            $('#home-nav-dropdown').addClass('nav-item dropdown');
            $('#home-nav-dropdown').removeClass('btn-group dropright');
          };

          if (ww < 700) {
            $('#home-header-left').addClass('w-75');
            $('#home-header-right').addClass('w-25');
            $('#home-header-left').removeClass('w-50');
            $('#home-header-right').removeClass('w-50');
          }
          else if (ww >= 701) {
            $('#home-header-left').removeClass('w-75');
            $('#home-header-right').removeClass('w-25');
            $('#home-header-left').addClass('w-50');
            $('#home-header-right').addClass('w-50');
        };
        };
        $(window).resize(function(){
          alterClass();
        });
        //Fire it when the page first loads:
        alterClass();
      });
  }

  
    
  

}

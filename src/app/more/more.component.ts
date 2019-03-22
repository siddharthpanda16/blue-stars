import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DataService} from '../data.service';


@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  constructor( private data:DataService ) { }
  players :Object;

  ngOnInit() {
    let list = [];
    let indice;
    let values;
    let innerHeight = window.innerHeight;
    $('body').css('height', innerHeight);
    
    $('textarea').on('keyup', e => {
        // grab the value of the textarea each time we type on a touch
        values = $('textarea').val();
    
        // make the list in an array each time we type the coma
        if (e.keyCode === 188) {
            list = values.split(',');
            list.pop();
            indice = list.length - 1;
        }
    });
    
    
    $('#draw').on('click', () => {
        // check if the possibility list finishes with a coma, if no, we add it and then the last possibility is added to the list
        if (values.charAt(values.length - 1) !== ",") {
            values = values + ',';
            list = values.split(',');
            list.pop();
            indice = list.length - 1;
        }
      
        // if the list ends with a space, we delete it for not drawing it
        if (list[list.length - 1] === ' ') {
            list.pop();
        }
    
        // hide the previous result to make an effect and showing that the value changes
        $('#result').hide();
    
        // choose a random value in the list
        let randomValue = randomNumFromInterval(0, indice);
        let finalValue = list[randomValue];
    
        // update the text with the drawn result
        $('#result').fadeIn(500).text(finalValue);
    
        // function making the draw
        function randomNumFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    });
    
    
    $('#remove').on('click', () => {
        list = [];
        $('#result').text('');
        $('textarea').val('');
    });


    /* //var button = document.getElementById('js-expand');
    var listContainer = document.getElementsByClassName('filters__list')[0];
    var listItems = document.getElementsByClassName('filters__item');

    TweenMax.to(listContainer, 0, { display: "none" });
    TweenMax.to(listItems, 0, { left: "-330px" });

    button.onclick = function() {
      if (listContainer.style.display === "none") {
        
        TweenMax.to(listContainer, 0, { display: "block" });
        TweenMax.staggerTo(listItems, 0.6, {left: "0", ease: Power4.easeOut}, 0.2);
        
      } else {
        
        TweenMax.staggerTo(listItems, 0.6, {left: "-330px", ease: Power4.easeOut}, -0.2);
        TweenMax.to(listContainer, 0, { delay: (0.6 + Number("0." + listItems.length*2)), display: "none" });
        
      }
      
    };
 */

    this.data.getUsers().subscribe(data=> {
      this.players =data
    })

  }

  cards: Object=[ {"type":"Event","title":"Pick Umpiring Assignment","details":"Select a random player for next umpiring assignment","footer":"Pick Umpire"},
  {"type":"Event","title":"Select Team","details":"Select Playing XI for next game","footer":"Select Team"},
  {"type":"Event","title":"Game Availability","details":"Post a poll for game availability","footer":"Game Availability Poll"},
  {"type":"something","title":"Something else","details":"Something else Something else Something else Something else Something else Something else Something else Something else Something else Something else Something else Something else Something else Something else Something else","footer":"Sunday, March 31st 2019"}];

  playingRole: Array<String> =[ "Batsman","Bowler","All-Rounder","WK/Batsman"];
  //randomRole = this.playingRole[Math.floor(Math.random() * this.playingRole.length)];
  // create name LI
  

  

}

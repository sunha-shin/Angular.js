import { Component } from '@angular/core';
import { Card, Greet, Border, BorderEdge } from './interfaceCard';
import cardOptions from '../assets/data/cardJSON.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'json2App';

  /* variables for JSON data */
  cardSelect: Card = cardOptions;
  
  greetSelect: Greet[] = cardOptions.greeting;
  borderSelect: Border[] = cardOptions.borderColour;
  bEdgeSelect: BorderEdge[] = cardOptions.borderEdge;  

  /* variables for JSON data */
  selectionGreet = "Happy Holidays!";
  selectionBorder = "green";
  selectionEdge = "square";
  
  outCard: string;
  createCard() {
    // console.log("in Create Card");
    this.outCard = 
    `
    <img src='assets/images/winter.jpg'>
    ${this.selectionGreet}
    <img src='assets/images/winter.jpg'><br> 
    ${this.cardSelect.holiday.signature}<br><hr>
    Let me know how you are doing...<br>
    ${this.cardSelect.holiday.myemail}<br>
    <img src='assets/images/winter.jpg'>
    <img src='assets/images/winter.jpg'>
    <img src='assets/images/winter.jpg'>
    `;

    document.getElementById("outid").style.borderColor = this.selectionBorder;
    document.getElementById("outid").style.color = this.selectionBorder;
    if (this.selectionEdge == "round") {
      document.getElementById("outid").style.borderRadius = '50px';
    }
    else {
      document.getElementById("outid").style.borderRadius = '0px';
    }
  }

}

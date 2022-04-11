import { Component, Input, OnInit } from '@angular/core';
import datas from "../../app/cardData"

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  items = datas
  
  @Input() isHovered: boolean = false


  constructor() {
    this.items = datas
    this.isHovered = false

  
   }

  ngOnInit(): void {
  }

}

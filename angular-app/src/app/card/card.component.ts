import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  constructor() {}
  @Input()
  item?: ICard;
}

export interface ICard {
  img: string;
  title: string;
  price: number;
}

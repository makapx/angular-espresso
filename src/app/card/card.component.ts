import { Component, Input } from '@angular/core';
import { FavoriteBtnComponent } from '../favorite-btn/favorite-btn.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FavoriteBtnComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() isFavorite: boolean = false;
  @Input() title: string = 'Espresso';
  @Input() body: string = 'Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling water is forced under pressure through finely-ground coffee beans.';
}

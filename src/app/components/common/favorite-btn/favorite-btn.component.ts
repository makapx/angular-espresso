import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorite-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-btn.component.html',
  styleUrl: './favorite-btn.component.css',
})
export class FavoriteBtnComponent {
  @Input() isFavorite: boolean = false;
  @Output() isFavorite$: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  /**
   * Toggles the favorite status of the button
   *
   * @returns {void}
   */
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.isFavorite$.emit(this.isFavorite);
  }
}

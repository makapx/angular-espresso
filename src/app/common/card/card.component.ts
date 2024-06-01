import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { FavoriteBtnComponent } from '../favorite-btn/favorite-btn.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Coffee } from '../../types/coffee';
import { CoffeeProviderService } from '../../coffee-provider.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FavoriteBtnComponent, CommonModule, HttpClientModule],
  providers: [CoffeeProviderService],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() coffee: Coffee | undefined;
  // This is a ViewChild decorator that injects a reference to the card component itself.
  // This reference is used to apply the favorite class to the card element when the favorite status is toggled.
  @ViewChild('cardRef', { static: false }) cardRef: ElementRef | undefined;

  constructor(private coffeeProviderService: CoffeeProviderService) {}

  /**
   * Sets the favorite status of the coffee
   *
   * @param {boolean} isFavorite
   * @param {HTMLElement} cardRef
   *
   * @returns {void}
   */
  setFavorite(isFavorite: boolean, cardRef: HTMLElement) {
    if (this.coffee) {
      cardRef.classList.toggle('is-favorite', isFavorite);
      this.coffee.isFavorite = isFavorite;
      this.coffeeProviderService.setFavorite(this.coffee.id, isFavorite);
    }
  }
}

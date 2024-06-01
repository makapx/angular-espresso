import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Coffee } from './types/coffee';

/**
 * A service that provides coffee data
 *
 * @export
 * @class CoffeeProviderService
 *
 */
@Injectable({
  providedIn: 'root',
})
export class CoffeeProviderService {
  constructor(private http: HttpClient) {}

  /**
   * Sets the favorite status of a coffee
   *
   * @param {number} coffeeId
   * @param {boolean} isFavorite
   *
   * @returns {void}
   */
  setFavorite(coffeeId: number, isFavorite: boolean): void {
    localStorage.setItem(coffeeId.toString(), isFavorite.toString());
  }

  /**
   * Retrieves the favorite status of a coffee
   *
   * @param {string} coffeeId
   * @returns {boolean}
   */
  getFavorite(coffeeId: string): boolean {
    return localStorage.getItem(coffeeId) === 'true';
  }

  /**
   * Retrieves all the coffees, sorted by favorite status
   *
   * @returns {Observable<Coffee[]>} An observable that will emit the coffees
   */
  getAllCoffees(): Observable<Coffee[]> {
    return new Observable((observer: Observer<Coffee[]>) => {
      this.http
        .get('https://fake-coffee-api.vercel.app/api')
        .subscribe((response: any) => {
          observer.next(
            response
              .map((coffee: any) => {
                return {
                  _id: coffee._id,
                  id: coffee.id,
                  name: coffee.name,
                  description: coffee.description,
                  price: coffee.price,
                  region: coffee.region,
                  weight: coffee.weight,
                  flavorProfile: coffee.flavor_profile,
                  grindOption: coffee.grind_option,
                  roastLevel: coffee.roast_level,
                  imageUrl: coffee.image_url,
                  isFavorite: this.getFavorite(coffee.id),
                } as Coffee;
              })
              .sort((a: Coffee, b: Coffee) =>
                a.isFavorite === b.isFavorite ? 0 : a.isFavorite ? -1 : 1
              ) as Coffee[]
          );
        });
    });
  }
}

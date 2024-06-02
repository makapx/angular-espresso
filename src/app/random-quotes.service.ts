import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RandomQuotesService {
  constructor(private http: HttpClient) {}

  /**
   * Retrieves a random quote from the backend
   *
   * @returns {Observable<string>} An observable that will emit a random quote
   */
  getRandomQuote(): Observable<string> {
    return new Observable((observer: Observer<string>) => {
      this.http
        .get('https://api.quotable.io/random')
        .subscribe((response: any) => {
          observer.next(response.content);
        });
    });
  }
}

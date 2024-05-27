import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor() {}

  /**
   * Retrieves the name of the app
   *
   * @returns {string} The name of the app
   */
  getAppName() {
    return 'Angular Espresso';
  }

  /**
   * Retrieves the version of the app
   *
   * @returns {string} The version of the app
   */
  getAppVersion() {
    return '1.0.0';
  }
}

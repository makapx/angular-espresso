import { Component } from '@angular/core';
import { InfoService } from '../../../info.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  providers: [InfoService],
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  _appName: string;
  get appName(): string {
    return this._appName;
  }
  _appVersion: string;
  get appVersion(): string {
    return this._appVersion;
  }

  constructor(private infoService: InfoService) {
    this._appName = this.infoService.getAppName();
    this._appVersion = this.infoService.getAppVersion();
  }
}

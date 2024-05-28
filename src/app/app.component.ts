import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RandomQuotesService } from './random-quotes.service';
import { FavoriteBtnComponent } from './favorite-btn/favorite-btn.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CardComponent,
  ],
  providers: [RandomQuotesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-espresso';
  cards = [
    {
      title: 'Espresso',
      body: 'Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling water is forced under pressure through finely-ground coffee beans.',
      isFavorite: false,
    },
    {
      title: 'Cappuccino',
      body: 'A cappuccino is an espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam.',
      isFavorite: false,
    },
    {
      title: 'Latte',
      body: 'A latte is a coffee drink made with espresso and steamed milk. The term as used in English is a shortened form of the Italian caffè latte, caffelatte or caffellatte, which means "milk coffee".',
      isFavorite: false,
    },
  ];
}

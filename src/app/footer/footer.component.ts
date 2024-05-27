import { Component } from '@angular/core';
import { RandomQuotesService } from '../random-quotes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  footerQuote: string = '';
  footerTitle: string = 'Wait for your espresso to cool down before drinking it. Read a quote instead.';
  constructor(private randomQuotesService: RandomQuotesService) {
    this.randomQuotesService.getRandomQuote().subscribe((quote: string) => {
      this.footerQuote = quote;
    });
  }
}

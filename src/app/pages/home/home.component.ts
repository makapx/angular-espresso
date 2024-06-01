import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../common/card/card.component';
import { CoffeeProviderService } from '../../coffee-provider.service';
import { HttpClientModule } from '@angular/common/http';
import { Coffee } from '../../types/coffee';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, HttpClientModule],
  providers: [CoffeeProviderService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  coffees: Coffee[] = [];

  constructor(private coffeeProviderService: CoffeeProviderService) {}

  ngOnInit() {
    this.coffeeProviderService
      .getAllCoffees()
      .subscribe((coffees: Coffee[]) => {
        this.coffees = coffees;
      });
  }
}

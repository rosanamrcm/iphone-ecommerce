import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { CartService } from '../../shared/cart/cart.service';

type CaseColor = {
  name: string;
  className: string;
  image: string;
};

@Component({
  selector: 'app-capa-iphone17-pro',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './capa-iphone17-pro.component.html',
  styleUrl: './capa-iphone17-pro.component.css'
})
export class CapaIphone17ProComponent {
  colors: CaseColor[] = [
    {
      name: 'Azul',
      className: 'blue',
      image: '/images/17pro-capa-azul.png'
    },
    {
      name: 'Roxo',
      className: 'purple',
      image: '/images/17pro-capa-roxo.png'
    },
    {
      name: 'Preto',
      className: 'black',
      image: '/images/17pro-capa-preto.png'
    },
    {
      name: 'Siena',
      className: 'sienna',
      image: '/images/17pro-capa-siena.png'
    },
    {
      name: 'Verde',
      className: 'green',
      image: '/images/17pro-capa-verde.png'
    }
  ];

  selectedColor = this.colors[0];

  constructor(private cartService: CartService) {}

  selectColor(color: CaseColor) {
    this.selectedColor = color;
  }

  addToCart() {
    this.cartService.addItem({
      product: 'Capa de tecido TechWoven com MagSafe',
      model: 'iPhone 17 Pro',
      color: this.selectedColor.name,
      storage: 'Nao se aplica',
      price: 'R$ 719,00'
    });
  }
}

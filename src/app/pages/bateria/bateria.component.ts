import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { CartService } from '../../shared/cart/cart.service';

@Component({
  selector: 'app-bateria',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './bateria.component.html',
  styleUrl: './bateria.component.css'
})
export class BateriaComponent {
  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addItem({
      product: 'Bateria MagSafe para iPhone Air',
      model: 'iPhone Air',
      color: 'Branco',
      storage: 'Nao se aplica',
      price: 'R$ 1.199,00'
    });
  }
}

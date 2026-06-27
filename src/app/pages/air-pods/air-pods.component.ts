import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { CartService } from '../../shared/cart/cart.service';

type AirPodsOption = {
  name: string;
  feature: string;
  price: string;
};

@Component({
  selector: 'app-air-pods',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './air-pods.component.html',
  styleUrl: './air-pods.component.css'
})
export class AirPodsComponent {
  options: AirPodsOption[] = [
    {
      name: 'AirPods 4',
      feature: 'Sem Cancelamento Ativo de Ruido',
      price: 'R$ 1.499,00'
    },
    {
      name: 'AirPods 4',
      feature: 'Com Cancelamento Ativo de Ruido',
      price: 'R$ 1.799,00'
    }
  ];

  selectedOption = this.options[1];

  constructor(private cartService: CartService) {}

  selectOption(option: AirPodsOption) {
    this.selectedOption = option;
  }

  addToCart() {
    this.cartService.addItem({
      product: 'AirPods',
      model: `${this.selectedOption.name} - ${this.selectedOption.feature}`,
      color: 'Branco',
      storage: 'Nao se aplica',
      price: this.selectedOption.price
    });
  }
}

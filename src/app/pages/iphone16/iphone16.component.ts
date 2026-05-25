import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { IphoneProductComponent } from '../../shared/iphone-product/iphone-product.component';


@Component({
  selector: 'app-iphone16',
  standalone: true,
  imports: [HeaderComponent, IphoneProductComponent],
  templateUrl: './iphone16.component.html',
  styleUrl: './iphone16.component.css'
})
export class Iphone16Component {

  title = 'iPhone 16';

  subtitle = 'Mais pessoal do que nunca.';

  price = 'A partir de R$ 6.799';

  thumbnails = [
    '/images/16frente.png',
    '/images/16traseira.png',
    '/images/16cores.png',
    '/images/16camera.png'
  ];

  colors = [
    {
      name: 'Ultramarino',
      code: '#A7C7E7',
    },
    {
      name: 'Verde-acinzentado',
      code: '#A3B899',
    },
    {
      name: 'Rosa',
      code: '#FFB6C1',
    },
    {
      name: 'Branco',
      code: '#df5f5f5',
    },
    {
      name: 'Preto',
      code: '#1f1f1f',
    }
  ];

  models = [
    {
      name: 'iPhone 16',
      screen: 'Tela de 6,1 polegadas',
      storageText: 'Vem com 128 GB de armazenamento',
      price: 'A partir de R$ 6.799',

      storageOptions: [
        {
          size: '128 GB',
          price: 'R$ 6.799'
        }
      ]
    },

    {
      name: 'iPhone 16 Plus',
      screen: 'Tela de 6,7 polegadas',
      storageText: 'Escolha entre 128 GB ou 256 GB de armazenamento',
      price: 'A partir de R$ 8.499',

      storageOptions: [
        {
          size: '128 GB',
          price: 'R$ 8.499'
        },
        {
          size: '256 GB',
          price: 'R$ 9.299'
        }
      ]
    }
  ];
}

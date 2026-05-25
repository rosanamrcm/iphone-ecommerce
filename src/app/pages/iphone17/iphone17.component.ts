import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { IphoneProductComponent } from '../../shared/iphone-product/iphone-product.component';

@Component({
  selector: 'app-iphone17',
  standalone: true,
  imports: [HeaderComponent, IphoneProductComponent],
  templateUrl: './iphone17.component.html',
  styleUrl: './iphone17.component.css'
})
export class Iphone17Component {

  title = 'iPhone 17';

  subtitle = 'Mais pessoal do que nunca.';

  price = 'A partir de R$ 7.999';

  thumbnails = [
    '/images/17frente.png',
    '/images/17traseira.png',
    '/images/17cores.png',
    '/images/17camera.png'
  ];

  colors = [
     {
      name: 'Lavanda',
      code: '#E6E6FA',
    },
    {
      name: 'Sálvia',
      code: '#D6E0C8',
    },
    {
      name: 'Azul-névoa',
      code: '#646D7E',
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
      name: 'iPhone 17',
      screen: 'Tela de 6,3 polegadas',
      price: 'A partir de R$ 6.799',

      storageOptions: [
       {
          size: '256 GB',
          price: 'R$ 7.999'
        },
        {
          size: '512 GB',
          price: 'R$ 9.499'
        }
      ]
    },
  ];

}

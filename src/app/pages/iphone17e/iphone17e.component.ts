import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { IphoneProductComponent } from '../../shared/iphone-product/iphone-product.component';

@Component({
  selector: 'app-iphone17e',
  standalone: true,
  imports: [HeaderComponent, IphoneProductComponent],
  templateUrl: './iphone17e.component.html',
  styleUrl: './iphone17e.component.css'
})
export class Iphone17eComponent {

   title = 'iPhone 17e';

  subtitle = 'Mais pessoal do que nunca.';

  price = 'A partir de R$ 5.799';

  thumbnails = [
    '/images/17e-frente.png',
    '/images/17e-traseira.png',
    '/images/17e-cores.png',
    '/images/17e-camera.png'
  ];

  colors = [
     {
      name: 'Rosa-pálido',
      code: '#FADADD',
    },
    {
      name: 'Branco-nuvem',
      code: '#df5f5f5',
    },
    {
      name: 'Preto',
      code: '#1f1f1f',
    }
  ];

  models = [
    {
      name: 'iPhone 17e',
      screen: 'Tela de 6,3 polegadas',
      price: 'A partir de R$ 5.799',

      storageOptions: [
       {
          size: '256 GB',
          price: 'R$ 5.799'
        },
        {
          size: '512 GB',
          price: 'R$ 7.299'
        }
      ]
    },
  ];

}

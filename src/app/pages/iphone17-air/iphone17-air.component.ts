import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { IphoneProductComponent } from '../../shared/iphone-product/iphone-product.component';

@Component({
  selector: 'app-iphone17-air',
  standalone: true,
  imports: [HeaderComponent, IphoneProductComponent],
  templateUrl: './iphone17-air.component.html',
  styleUrl: './iphone17-air.component.css'
})
export class Iphone17AirComponent {

  title = 'iPhone 17 Air';

  subtitle = 'Mais pessoal do que nunca.';

  price = 'A partir de R$ 7.999';

  thumbnails = [
    '/images/17air-frente.png',
    '/images/17air-traseira.png',
    '/images/17air-cores.png',
    '/images/17air-lateral.png',
    '/images/17air-camera.png'
  ];

  colors = [
     {
      name: 'Azul-céu',
      code: '#ADD8E6',
    },
    {
      name: 'Dourado-claro',
      code: '#EBB866',
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
      name: 'iPhone 17 Air',
      screen: 'Tela de 6,3 polegadas',
      price: 'A partir de R$ 10.499',

      storageOptions: [
       {
          size: '256 GB',
          price: 'R$ 10.499'
        },
        {
          size: '512 GB',
          price: 'R$ 11.999'
        },
        {
          size: '1 TB',
          price: 'R$ 13.499'
        }
      ]
    },
  ];

}

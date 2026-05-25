import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { IphoneProductComponent } from '../../shared/iphone-product/iphone-product.component';

@Component({
  selector: 'app-iphone17-pro',
  standalone: true,
  imports: [HeaderComponent, IphoneProductComponent],
  templateUrl: './iphone17-pro.component.html',
  styleUrl: './iphone17-pro.component.css'
})
export class Iphone17ProComponent {

  title = 'iPhone 17 Pro';

  subtitle = 'Do seu jeito.';

  price = 'A partir de R$ 11.499';

  thumbnails = [
    '/images/17pro-frente.png',
    '/images/17pro-traseira.png',
    '/images/17pro-cores.png',
    '/images/17pro-lateral.png',
    '/images/17pro-camera.png'
  ];

  colors = [
    {
      name: 'Prateado',
      code: '#C0C0C0',
    },
    {
      name: 'Laranja-cósmico',
      code: '#FF8C00',
    },  
    {
      name: 'Azul-intenso',
      code: '#000080',
    }
  ];

 models = [
    {
      name: 'iPhone 17 Pro',
      screen: 'Tela de 6,3 polegadas',

      storageOptions: [
        {
          size: '256 GB',
          price: 'R$ 11.499'
        },
        {
          size: '512 GB',
          price: 'R$ 12.999'
        },
        {
          size: '1 TB',
          price: 'R$ 14.999'
        }
      ]
    },

    {
      name: 'iPhone 17 Pro Max',
      screen: 'Tela de 6,9 polegadas',

      storageOptions: [
        {
          size: '256 GB',
          price: 'R$ 12.499'
        },
        {
          size: '512 GB',
          price: 'R$ 13.999'
        },
        {
          size: '1 TB',
          price: 'R$ 15.999'
        },
        {
          size: '2 TB',
          price: 'R$ 18.499'
        }
      ]
    }
  ];

}

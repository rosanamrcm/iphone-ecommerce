import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-iphone-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iphone-product.component.html',
  styleUrl: './iphone-product.component.css'
})
export class IphoneProductComponent implements OnInit {

  @Input() models: any[] = [];

  selectedModel: any;
  hoveredColor = '';
  currentImageIndex = 0;

  ngOnInit() {
    this.selectedModel = this.models[0];
  }

  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() price!: string;


  @Input() thumbnails: string[] = [];

  @Input() colors: { name: string, code: string }[] = [];

  get currentImage(): string {
    return this.thumbnails[this.currentImageIndex];
  }

  nextImage() {

    if (this.currentImageIndex < this.thumbnails.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }

  prevImage() {

    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.thumbnails.length - 1;
    }
  }

}

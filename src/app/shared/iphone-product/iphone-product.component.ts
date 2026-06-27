import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';

type ProductColor = {
  name: string;
  code: string;
};

type StorageOption = {
  size: string;
  price: string;
};

type ProductModel = {
  name: string;
  screen: string;
  storageText?: string;
  price?: string;
  storageOptions: StorageOption[];
};

@Component({
  selector: 'app-iphone-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iphone-product.component.html',
  styleUrl: './iphone-product.component.css'
})
export class IphoneProductComponent implements OnInit {

  @Input() models: ProductModel[] = [];

  selectedModel?: ProductModel;
  selectedColor?: ProductColor;
  selectedStorage?: StorageOption;
  hoveredColor = '';
  currentImageIndex = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.selectedModel = this.models[0];
    this.selectedColor = this.colors[0];
    this.selectedStorage = this.selectedModel?.storageOptions[0];
  }

  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() price!: string;


  @Input() thumbnails: string[] = [];

  @Input() colors: ProductColor[] = [];

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

  selectModel(model: ProductModel) {
    this.selectedModel = model;
    this.selectedStorage = model.storageOptions[0];
  }

  selectColor(color: ProductColor) {
    this.selectedColor = color;
  }

  selectStorage(storage: StorageOption) {
    this.selectedStorage = storage;
  }

  addToCart() {
    if (!this.selectedModel || !this.selectedColor || !this.selectedStorage) {
      return;
    }

    this.cartService.addItem({
      product: this.title,
      model: this.selectedModel.name,
      color: this.selectedColor.name,
      storage: this.selectedStorage.size,
      price: this.selectedStorage.price
    });
  }

}

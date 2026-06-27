import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export type CartItem = {
  product: string;
  model: string;
  color: string;
  storage: string;
  price: string;
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly itemsSubject = new BehaviorSubject<CartItem[]>([]);

  readonly items$ = this.itemsSubject.asObservable();
  readonly total$ = this.items$.pipe(
    map((items) => this.formatCurrency(
      items.reduce((total, item) => total + this.parsePrice(item.price), 0)
    ))
  );

  get items(): CartItem[] {
    return this.itemsSubject.value;
  }

  addItem(item: CartItem) {
    this.itemsSubject.next([...this.items, item]);
  }

  clearCart() {
    this.itemsSubject.next([]);
  }

  private parsePrice(price: string): number {
    return Number(price.replace('R$', '').replace(/\./g, '').replace(',', '.').trim());
  }

  private formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }
}

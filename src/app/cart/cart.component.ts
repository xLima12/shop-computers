import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProductCart } from '../products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItens: IProductCart[] = [];
  total = 0;

  constructor(
    public cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartItens = this.cartService.getCart();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartItens.reduce((prev, curr) => prev + (curr.price * curr.amountCart), 0);
  }

  removeProductCart(productId: number) {
    this.cartItens = this.cartItens.filter(item => item.id !== productId);
    this.cartService.removeProductCart(productId);
  }

  buy() {
    alert("Parabens, compra realizada com sucesso");
    this.cartService.cleanCart();
    this.router.navigate(["products"])
  }

}

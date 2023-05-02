import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { NotificationsService } from 'src/app/notifications.service';
import { IProductCart, IProducts } from 'src/app/products';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  product: IProducts | undefined;
  amount = 1;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private notification: NotificationsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get("id"));
    this.product = this.productService.getOne(productId);
  }

  addCart() {
    this.notification.notification("O produto foi adicionado ao carrinho!");
    const product: IProductCart = {
      ...this.product!,
      amountCart: this.amount
    };
    this.cartService.addCart(product);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cs: CartService) { }

  ngOnInit(): void {

    //va chercher les params de l'URL
    const routeParams = this.route.snapshot.paramMap;
    //prend l'id dans les params
    const productIdFromRoute = Number(routeParams.get('productId'));

    //inject le bon produit dans product
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product){
    this.cs.addToCart(product);
    window.alert("Product added to cart.");
  }

}

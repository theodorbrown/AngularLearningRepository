import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cs: CartService, private fb: FormBuilder) { }

  items: Product[] = this.cs.getItems();

  checkoutForm = this.fb.group({
    name: '',
    address: '',
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.cs.clearCart();
    console.warn('Your order has been submited', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}

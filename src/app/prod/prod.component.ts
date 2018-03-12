import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {

  constructor(private dataService: DataService) { }
  confirmationString = "Product has been added successfully";
  productObj = {};
  products = [];

  addNewProduct(product){
    console.log(product.name + " & " + product.price + " & " +product.quantity);
    this.productObj = {
      "name" : product.name,
      "price" : product.price,
      "quantity" : product.quantity
    }
    this.dataService.addProduct(this.productObj)
    .subscribe(product => { console.log(product)});
  }

//this.products.push(product)
  ngOnInit() {
    console.log("Product Component");
  }
}

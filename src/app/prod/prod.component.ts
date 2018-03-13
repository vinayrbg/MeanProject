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
  message : String;

  addNewProduct(product){
    console.log(product.name + " & " + product.price + " & " +product.quantity);
    this.productObj = {
      "name" : product.name,
      "price" : product.price,
      "quantity" : product.quantity
    }
    if(!product.name || !product.price){
          this.message = "You have not entered the complete details, Please fill all the fields"
      }
    else
      {
          this.message = "Product successfully added... "
      }
    this.dataService.addProduct(this.productObj)
    .subscribe(product => { console.log(product)});
  }

//this.products.push(product)
  ngOnInit() {
    console.log("Product Component");
  }
}

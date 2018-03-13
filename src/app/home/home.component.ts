import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { clone } from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Array<any>;
  editProductForm: boolean = false;
  editedProduct: any = {};
  constructor(private dataServices : DataService){
  }

  fetchData(){
    this.dataServices.getProduct().subscribe(response => this.products = response);
  }
  
  deleteProduct(id){
    const response = confirm('are you sure to delete it?');
    if (response ){
      const tasks = this.products;
      this.dataServices.deleteProd(id).subscribe(data => {
          console.log();
        })
    }
    this.fetchData();
  }  

  showEditProductForm(product) {
    this.editProductForm = true;
    this.editedProduct = clone(product);
  }

  cancelEdits() {
    this.editedProduct = {};
    this.editProductForm = false;
  }

  updateProduct(products) {
    var newTask = {            
      id: products._id,
      name: products.name,
      price: products.price,
      quantity: products.quantity,
    };
    console.log(newTask);
    this.dataServices.updateProd(newTask)
      .subscribe(res => {
        console.log("component"+res);
      })
      this.fetchData();
  }

  ngOnInit() {
    this.fetchData();
    console.log("Home component");
  }

}

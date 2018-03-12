import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Array<any>;
  constructor(private dataServices : DataService){
  }

  fetchData(){
    this.dataServices.getProduct().subscribe(response => this.products = response);
  }
  
  deleteProduct(id){
    const response = confirm('are you sure to delete it?');
    if (response ){
      const tasks = this.products;
      this.dataServices.deleteTask(id).subscribe(data => {
          console.log(data);
        })
    }
    this.fetchData();
  }  

  ngOnInit() {
    this.fetchData();
    console.log("Home component");
  }

}

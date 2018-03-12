import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService 
{
  constructor(private _http:Http) { }

  getProduct(){
    console.log("Services called");
    return this._http.get('/products').map(res => res.json());
  }

  addProduct(products){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.post('/products', JSON.stringify(products), {headers: headers}).map(res => res.json());
  }

  deleteTask(id) {
    return this._http.delete(`/products/${id}`)
      .map(res => res);
  }
}

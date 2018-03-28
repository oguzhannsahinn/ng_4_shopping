import { Injectable, Inject } from '@angular/core';
import { Product } from './product'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'//response datayı nesneye map eder.
import 'rxjs/add/operator/do'//işlem bittikten sonraki isteğimizi tamamlar.
import 'rxjs/add/operator/catch'//hata oldugunda yapılmasını istediğimizi yazarız.  


@Injectable()
export class ProductService {

  constructor(private http: Http, @Inject('apiUrl') private apiUrl) { }


  getProducts2(seoUrl: string): Observable<Product[]> 
  {
    if (seoUrl) 
    {
      return this.http.get(this.apiUrl + "/products/" + seoUrl).map(response => response.json());

    }
    else 
    {
        return this.http.get(this.apiUrl + "/products").map(response => response.json());
    }
    
  }


}

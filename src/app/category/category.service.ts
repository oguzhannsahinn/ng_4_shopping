import { Injectable } from '@angular/core';

import {Inject} from '@angular/core'
import {Http,Response} from '@angular/http'
import { Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'//response datayı nesneye map eder.
import 'rxjs/add/operator/do'//işlem bittikten sonraki isteğimizi tamamlar.
import 'rxjs/add/operator/catch'//hata oldugunda yapılmasını istediğimizi yazarız. 
import {Category} from './category'


@Injectable()
export class CategoryService {

  constructor(private http:Http,@Inject("apiUrl") private apiUrl)
  { }

  url:string=this.apiUrl + "/categories";
  getCategories():Observable<Category[]>
  {
    return this.http.get(this.url).map(Response=>Response.json());
  }

}

import { Component, OnInit } from '@angular/core';
import { Product } from "./product"
import { ProductService } from './product.service'
import { NotificationsService } from 'angular2-notifications'
import {CartService} from '../cart/cart.service'

import {ActivatedRoute} from '@angular/router'
import {Pager} from '../app-pager'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})

export class ProductComponent implements OnInit 
{

  products: Product[];
  addedProduct:string;
  pager:Pager=new Pager();

  
  constructor
    (
     private productService: ProductService,
     private notificationsService: NotificationsService,
     private cartService : CartService,
     private activatedRoute:ActivatedRoute
    )
  {

  }

  ngOnInit() 
  {
    this.activatedRoute.params.subscribe(params=>
    {
      this.getProducts2(params["seoUrl"])
    })
  }

  //urunlerı alma
  getProducts2(seoUrl:string) 
  {
    this.productService.getProducts2(seoUrl).subscribe
    (p => {this.products = p;
    this.pager=this.getPager(p.length);});

  }

  //urun ekleme
  addToCart(product:Product)
  {
    this.addedProduct=product.productName;
    this.cartService.addToCart(product);
    this.notificationsService.success("Successfull" , product.productName + " added to Cart!");
  }


  //sayfalama
  getPager(totalItems:number,currentPage:number=1,pageSize:number=3):Pager
  {
    let totalPages=Math.ceil(totalItems/pageSize);
    
    let pages:Array<number>=[];

    for(let i=1;i<totalPages;i++)
    {
      pages.push(i);
    }

    var pager=new Pager();
    pager.currentPage=currentPage;
    pager.pageList=pages;
    pager.pageSize=pageSize;

    return pager;
  }

  setPage(page:number)
  {
    this.pager.currentPage=page;
  }


}

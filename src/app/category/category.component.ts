import { Component, OnInit } from '@angular/core';

import {Category} from './category'
import {CategoryService} from './category.service'


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  selectedCategory: Category;
  constructor(private categoryService:CategoryService) { }

  categories:Category[];

  getCategories()
  {
    this.categoryService.getCategories().subscribe(c=>this.categories=c);
  }

  ngOnInit()
  {
    this.getCategories();
  }

  onSelect(category?: Category)
  {
    if(category)
    {
      this.selectedCategory=category;
    }
    else
    {
      this.selectedCategory=null;
    }
  }

}

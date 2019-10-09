import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Sushi', 'Rice, fish, avocado, algae', 'https://images.japancentre.com/recipes/pics/18/main/makisushi.jpg?1557308201'),
    new Recipe('Sushi', 'Rice, fish, avocado, algae', 'https://images.japancentre.com/recipes/pics/18/main/makisushi.jpg?1557308201')

  ];

  constructor() { }

  ngOnInit() {
  }

}

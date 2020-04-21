import { Component, OnInit } from '@angular/core';
import { Dish } from '../menu/shared/dish';
import { DISHES } from '../menu/shared/dishes';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  selectedDish: Dish;
  //On passer les donnes avec les notions des services
  dishes: Dish[];

  //On a passer les donnes sans utiliser la notion des services 
  // dishes: Dish[] = DISHES;


  // When Angular creates a new instance of a component class,
  // it determines which services or other dependencies that component needs by looking at the constructor parameter types
  constructor( private dishService : DishService) { }

  ngOnInit(): void {
    this.dishes = this.dishService.getDishes();
  }

  onSelect(dish: Dish){
    this.selectedDish = dish;
  }

}

import { Injectable } from '@angular/core';
import { Dish } from '../menu/shared/dish';
import { DISHES } from '../menu/shared/dishes';


// To define a class as a service you need to use @Injectable
@Injectable({
  providedIn: 'root'
})
export class DishService {

  

  constructor() { }

  getDishes(): Dish[] {
    return DISHES
  }

  getDish( id: number): Dish{

    return DISHES.filter((dish) => (dish.id === id))[0];
  }

  getFeaturedDish(): Dish {

    return DISHES.filter((dish) => dish.featured)[0];
    
  }
}

import { Injectable } from '@angular/core';
import { Recipe } from './recipe.interface';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class RecipeService {
	image = 'https://placehold.co/100';

	recipes: Recipe[] = [
		{
			id: 1,
			name: 'Spaghetti Bolognese',
			description: 'Classic Italian pasta dish with rich meat sauce.',
			imagePath: this.image,
			ingredients: [
				'spaghetti',
				'ground beef',
				'tomato sauce',
				'onion',
				'garlic',
			],
			rating: 4.5,
		},
		{
			id: 2,
			name: 'Chicken Curry',
			description: 'Spicy and flavorful chicken curry.',
			imagePath: this.image,
			ingredients: [
				'chicken',
				'curry powder',
				'coconut milk',
				'onion',
				'garlic',
			],
			rating: 4.7,
		},
		{
			id: 3,
			name: 'Vegetable Stir Fry',
			description: 'Quick and healthy vegetable stir fry.',
			imagePath: this.image,
			ingredients: [
				'broccoli',
				'carrot',
				'bell pepper',
				'soy sauce',
				'ginger',
			],
			rating: 4.3,
		},
		{
			id: 4,
			name: 'Beef Tacos',
			description: 'Tasty beef tacos with fresh toppings.',
			imagePath: this.image,
			ingredients: [
				'ground beef',
				'taco shells',
				'lettuce',
				'tomato',
				'cheese',
			],
			rating: 4.6,
		},
		{
			id: 5,
			name: 'Margherita Pizza',
			description: 'Classic Margherita pizza with fresh basil.',
			imagePath: this.image,
			ingredients: ['pizza dough', 'tomato sauce', 'mozzarella', 'basil'],
			rating: 4.8,
		},
		{
			id: 6,
			name: 'Caesar Salad',
			description: 'Crisp Caesar salad with creamy dressing.',
			imagePath: this.image,
			ingredients: [
				'romaine lettuce',
				'croutons',
				'parmesan',
				'Caesar dressing',
			],
			rating: 4.4,
		},
		{
			id: 7,
			name: 'Grilled Cheese Sandwich',
			description: 'Simple and delicious grilled cheese sandwich.',
			imagePath: this.image,
			ingredients: ['bread', 'cheddar cheese', 'butter'],
			rating: 4.2,
		},
		{
			id: 8,
			name: 'Pancakes',
			description: 'Fluffy pancakes with maple syrup.',
			imagePath: this.image,
			ingredients: [
				'flour',
				'milk',
				'egg',
				'baking powder',
				'maple syrup',
			],
			rating: 4.9,
		},
		{
			id: 9,
			name: 'Tomato Soup',
			description: 'Warm and comforting tomato soup.',
			imagePath: this.image,
			ingredients: [
				'tomatoes',
				'onion',
				'garlic',
				'vegetable broth',
				'cream',
			],
			rating: 4.5,
		},
		{
			id: 10,
			name: 'Chocolate Cake',
			description: 'Rich and moist chocolate cake.',
			imagePath: this.image,
			ingredients: ['flour', 'cocoa powder', 'sugar', 'eggs', 'butter'],
			rating: 4.9,
		},
	];

	getRecipes(): Observable<Recipe[]> {
		return new Observable((observer) => {
			observer.next(this.recipes);
			observer.complete();
		});
	}
}

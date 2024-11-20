import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.interface';
import { RecipeService } from '../recipe.service';
import { inject } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
	selector: 'app-recipe',
	standalone: true,
	imports: [NgFor],
	templateUrl: './recipe.component.html',
	styleUrl: './recipe.component.css',
})
export class RecipeComponent implements OnInit {
	private readonly _recipeService = inject(RecipeService);
	recipes: Recipe[] = [];

	ngOnInit() {
		this._recipeService.getRecipes().subscribe((recipes) => {
			this.recipes = recipes;
		});
	}
}

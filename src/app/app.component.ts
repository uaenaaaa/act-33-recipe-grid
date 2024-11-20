import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RecipeComponent],
	template: `<app-recipe></app-recipe>`,
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'act-33-recipe-grid';
}

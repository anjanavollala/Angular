import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  stars: number[] = [1, 2, 3, 4, 5];
  rating: number | null = null;

  constructor() { }

  rate(star: number) {
    this.rating = star;
  }

  isRated(star: number): boolean {
    return this.rating !== null && star <= this.rating;
  }
}

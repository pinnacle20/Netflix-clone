import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.css'],
  standalone: true,
  imports: [MovieCarouselComponent],
})
export class MovieCarouselComponent implements OnInit {
  ngOnInit(): void {
      
  }
}

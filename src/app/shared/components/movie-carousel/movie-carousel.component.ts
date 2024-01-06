import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { CommonModule } from '@angular/common';

import SwiperCore, { Navigation, Pagination} from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { DescriptionPipe } from '../../pipes/description.pipe';
import { ImagePipe } from '../../pipes/image.pipe';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss'],
  standalone: true,
  imports: [SwiperModule, CommonModule, DescriptionPipe, ImagePipe],
  encapsulation: ViewEncapsulation.None
})
export class MovieCarouselComponent implements OnInit {
  @Input() popularMovies: any;
  @Input() namE: string = '';
  ngOnInit(): void {
      console.log('hehe')
      console.log('Received thing ',this.popularMovies)
  }
}

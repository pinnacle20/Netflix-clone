import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { MovieService } from 'src/app/shared/services/movie.service';
import { MovieCarouselComponent } from 'src/app/shared/components/movie-carousel/movie-carousel.component';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
})
export class BrowseComponent implements OnInit {
  constructor(private auth: AuthService, private movieService: MovieService) {}

  name = JSON.parse(sessionStorage.getItem('loggedinUser')!).name;
  imgUrl = JSON.parse(sessionStorage.getItem('loggedinUser')!).picture;
  email = JSON.parse(sessionStorage.getItem('loggedinUser')!).email;

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((resp) => {
      console.log(resp);
    });
  }

  signOut() {
    sessionStorage.removeItem('loggedinUser');
    this.auth.signOut();
  }
}

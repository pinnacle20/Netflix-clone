import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { MovieService } from 'src/app/shared/services/movie.service';

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
  popularMovies: any = [];
  TvShows: any = [];

  videoId = '';
  movieId = '';
  desc = '';
  title = '';

  getVideoTrailer() {
    this.movieService.getVideos(this.movieId).subscribe((resp) => {
      const result = resp.results;
      for (var item of result) {
        if (item.type === 'Trailer') {
          this.videoId = item.key;
          console.log('video id found is -', this.videoId);
        }
      }
    });
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((resp) => {
      this.popularMovies = resp.results;
      this.movieId = this.popularMovies.at(0).id;
      this.desc = this.popularMovies.at(0).overview;
      this.title = this.popularMovies.at(0).original_title;
      this.getVideoTrailer();
    });

    this.movieService.getTvShows().subscribe((resp) => {
      this.TvShows = resp.results;
    });
  }

  signOut() {
    sessionStorage.removeItem('loggedinUser');
    this.auth.signOut();
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGY1YzA4NDVkY2E3NTZkMTNkYWQ0YWMyMDhmM2Q0YiIsInN1YiI6IjY1OTZhYzI2ZWEzN2UwMDZmYTRjYzEzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uumToUH9qKK-Jm4cWmILnhtaetm02snHz6fN5bd6uqo',
  },
};

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
      options
    );
  }

  getTvShows() {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc',
      options
    );
  }

  getVideos(movieId: any) {
    var url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
    return this.http.get<any>(url, options);
  }
}

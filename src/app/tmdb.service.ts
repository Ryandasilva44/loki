import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private apiKey = '96a2dec450f65536afec30e380c02ebd';
  private apiUrl = 'https://api.themoviedb.or/3';

  constructor(private http: HttpClient) {}

  getMovieDetails(movieId: string) {
    return this.http.get(
      '${this.apiUrl}/movie/${movieId}api_key=${this.apiKey}'
    );
  }
}

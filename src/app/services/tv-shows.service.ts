import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TvShows } from './tv-shows.interface';

@Injectable({
  providedIn: 'root',
})
export class TvShowsService {
  private apiBaseUrl = 'http://api.tvmaze.com';

  constructor(private http: HttpClient) {}

  getTvShowsByGenre(): Observable<TvShows[]> {
    const url = `${this.apiBaseUrl}/shows`;
    return this.http.get<TvShows[]>(url);
  }

  getTvShowDetails(showId: string | null): Observable<TvShows> {
    const url = `${this.apiBaseUrl}/shows/${showId}`;
    return this.http.get<TvShows>(url);
  }
}

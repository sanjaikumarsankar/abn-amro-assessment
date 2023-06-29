import { Component, OnInit } from '@angular/core';
import { TvShows } from 'src/app/services/tv-shows.interface';
import { TvShowsService } from 'src/app/services/tv-shows.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  tvShows?: TvShows[];

  genres?: string[];

  searchTerm = '';

  selectedGenre = 'All';

  ngOnInit(): void {
    this.tvShowsService.getTvShowsByGenre().subscribe((res) => {
      this.tvShows = res;
      this.genres = this.getGenres(this.tvShows);
    });
  }

  getGenres(tvShows: TvShows[]): string[] {
    const genresSet = new Set<string>();
    for (const show of tvShows) {
      for (const genre of show.genres) {
        genresSet.add(genre);
      }
    }
    return Array.from(genresSet);
  }

  constructor(private readonly tvShowsService: TvShowsService) {}
}

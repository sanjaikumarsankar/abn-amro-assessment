import { Pipe, PipeTransform } from '@angular/core';
import { TvShows } from '../services/tv-shows.interface';

@Pipe({
  name: 'tvShowFilterByGenre',
})
export class TvShowFilterByGenrePipe implements PipeTransform {
  transform(items: TvShows[], genre: string, searchTerm: string): TvShows[] {
    if (!items) {
      return [];
    }

    if (!genre && !searchTerm) {
      return items;
    }

    let filteredItems = items;

    if (genre && genre !== 'All') {
      filteredItems = filteredItems.filter((item) =>
        item.genres.includes(genre)
      );
    }

    if (searchTerm) {
      filteredItems = filteredItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    filteredItems.sort((a, b) => {
      return b.rating.average - a.rating.average;
    });

    return filteredItems;
  }
}

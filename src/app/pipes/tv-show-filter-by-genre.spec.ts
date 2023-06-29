import { TvShows } from '../services/tv-shows.interface';
import { TvShowFilterByGenrePipe } from './tv-show-filter-by-genre';

describe('TvShowFilterByGenrePipe', () => {
  let pipe: TvShowFilterByGenrePipe;
  let items: TvShows[];

  beforeEach(() => {
    pipe = new TvShowFilterByGenrePipe();

    items = [
      {
        id: 1,
        name: 'Show 1',
        genres: ['Drama'],
        rating: { average: 7.5 },
      },
      {
        id: 2,
        name: 'Show 2',
        genres: ['Action'],
        rating: { average: 8.0 },
      },
      {
        id: 3,
        name: 'Show 3',
        genres: ['Drama', 'Action'],
        rating: { average: 8.5 },
      },
    ] as any;
  });

  it('should return all items if no genre and search term are provided', () => {
    const result = pipe.transform(items, '', '');
    expect(result).toEqual(items);
  });

  it('should filter items by genre', () => {
    const result = pipe.transform(items, 'Action', '');
    expect(result.length).toBe(2);
  });

  it('should filter items by search term', () => {
    const result = pipe.transform(items, '', 'show 1');
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Show 1');
  });

  it('should filter and sort items by genre and rating', () => {
    const result = pipe.transform(items, 'Drama', '');
    expect(result.length).toBe(2);
    expect(result[0].name).toBe('Show 3');
    expect(result[1].name).toBe('Show 1');
  });

  it('should return [] when items is empty', () => {
    const result = pipe.transform([], 'Action', '');
    expect(result.length).toBe(0);
  });
});

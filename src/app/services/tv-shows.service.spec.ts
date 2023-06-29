import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TvShowsService } from './tv-shows.service';
import { TvShows } from './tv-shows.interface';

describe('TvShowsService', () => {
  let service: TvShowsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TvShowsService],
    });
    service = TestBed.inject(TvShowsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve TV shows by genre', () => {
    const expectedUrl = 'http://api.tvmaze.com/shows';
    const expectedResponse: TvShows[] = [
      { id: 1, name: 'Show 1', genres: ['Drama'] },
      { id: 2, name: 'Show 2', genres: ['Drama'] },
    ] as any;

    service.getTvShowsByGenre().subscribe((tvShows) => {
      expect(tvShows).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(expectedResponse);
  });

  it('should retrieve TV show details by ID', () => {
    const showId = '1';
    const expectedUrl = 'http://api.tvmaze.com/shows/1';
    const expectedResponse: TvShows = {
      id: 1,
      name: 'Show 1',
      genres: ['Drama'],
    } as any;

    service.getTvShowDetails(showId).subscribe((tvShow) => {
      expect(tvShow).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(expectedResponse);
  });
});

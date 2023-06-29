import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { TvShowsService } from 'src/app/services/tv-shows.service';
import { of } from 'rxjs';
import { TvShowFilterByGenrePipe } from 'src/app/pipes/tv-show-filter-by-genre';
import { TvShows } from 'src/app/services/tv-shows.interface';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let tvShowsService: TvShowsService;

  const mockTvShowsService = jasmine.createSpyObj('TvShowsService', [
    'getTvShowsByGenre',
  ]);

  const mockData = [
    {
      id: 1,
      name: 'Show 1',
      genres: ['Genre 1', 'Genre 2'],
      rating: { average: 3 },
    },
    {
      id: 2,
      name: 'Show 2',
      genres: ['Genre 2', 'Genre 3'],
      rating: { average: 3 },
    },
  ] as any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent, TvShowFilterByGenrePipe],
      providers: [{ provide: TvShowsService, useValue: mockTvShowsService }],
    }).compileComponents();

    tvShowsService = TestBed.inject(TvShowsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize tvShows and genres when API call succeeds', () => {
    const mockGenres = ['Genre 1', 'Genre 2', 'Genre 3'];

    mockTvShowsService.getTvShowsByGenre.and.returnValue(of(mockData));

    fixture.detectChanges();

    expect(component.tvShows).toEqual(mockData);
    expect(component.genres).toEqual(mockGenres);
  });

  it('should extract unique genres from the provided TV shows', () => {
    const expectedGenres: string[] = ['Genre 1', 'Genre 2', 'Genre 3'];

    const extractedGenres = component.getGenres(mockData);

    expect(extractedGenres).toEqual(expectedGenres);
  });
});

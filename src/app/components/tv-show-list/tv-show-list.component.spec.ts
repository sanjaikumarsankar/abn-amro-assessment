import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { TvShowListComponent } from './tv-show-list.component';

describe('TvShowListComponent', () => {
  let component: TvShowListComponent;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TvShowListComponent],
    });

    router = TestBed.inject(Router);
    component = new TvShowListComponent(router);
  });

  it('should navigate to the show details page with the provided id', () => {
    const navigateSpy = spyOn(router, 'navigate');

    component.showDetails(1);

    expect(navigateSpy).toHaveBeenCalledWith(['shows/1']);
  });
});

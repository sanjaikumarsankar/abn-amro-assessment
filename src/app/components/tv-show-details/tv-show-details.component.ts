import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TvShows } from 'src/app/services/tv-shows.interface';
import { TvShowsService } from 'src/app/services/tv-shows.service';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
})
export class TvShowDetailsComponent {
  show?: TvShows;

  showId: string | null;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.tvShowsService.getTvShowDetails(id).subscribe((res) => {
        this.show = res;
      });
    });
  }

  backToDashboard() {
    this.router.navigate([`/`]);
  }
  constructor(
    private readonly tvShowsService: TvShowsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.showId = this.route.snapshot.queryParamMap.get('id');
  }
}

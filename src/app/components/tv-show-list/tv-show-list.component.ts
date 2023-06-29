import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TvShows } from 'src/app/services/tv-shows.interface';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
})
export class TvShowListComponent {
  @Input() tvShows?: TvShows[];

  @Input() title?: string;

  showDetails(id: number) {
    this.router.navigate([`shows/${id}`]);
  }

  constructor(private router: Router) {}
}

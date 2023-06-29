import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent, TvShowListComponent } from './components';
import { TvShowsService } from './services/tv-shows.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TvShowFilterByGenrePipe } from './pipes/tv-show-filter-by-genre';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TvShowListComponent,
    TvShowFilterByGenrePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [TvShowsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

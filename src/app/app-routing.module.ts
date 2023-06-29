import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent, TvShowDetailsComponent } from './components';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'shows/:id', component: TvShowDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

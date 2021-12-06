import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageGamesComponent } from './manage-games/manage-games.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'manage-games', component: ManageGamesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

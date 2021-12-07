import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageGamesComponent } from './manage-games/manage-games.component';
import { GamesComponent } from './games/games.component';
import { PlatformGamesComponent } from './games/platform-games/platform-games.component';
import { GameDetailsComponent } from './games/platform-games/game-details/game-details.component';
import { EmptyGameComponent } from './games/empty-game.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'manage-games', component: ManageGamesComponent},
  {path: 'games', component: GamesComponent, children: [
      {path: '', component: EmptyGameComponent},
      {path: ':id', component: PlatformGamesComponent},
    ]
  },
  {path: 'games/:platform-id/:game-id', component: GameDetailsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageGamesComponent } from './manage-games/manage-games.component';
import { NewGameComponent } from './manage-games/new-game/new-game.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { GameService } from './shared/game.service';
import { GamesComponent } from './games/games.component';
import { PlatformGamesComponent } from './games/platform-games/platform-games.component';
import { GameDetailsComponent } from './games/platform-games/game-details/game-details.component';
import { EmptyGameComponent } from './games/empty-game.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageGamesComponent,
    NewGameComponent,
    ToolbarComponent,
    HomeComponent,
    GamesComponent,
    PlatformGamesComponent,
    GameDetailsComponent,
    EmptyGameComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }

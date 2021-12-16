import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GameService } from '../../shared/game.service';
import { Game } from '../../shared/game.model';

@Component({
  selector: 'app-platform-games',
  templateUrl: './platform-games.component.html',
  styleUrls: ['./platform-games.component.css']
})
export class PlatformGamesComponent implements OnInit {
  games: Game[] = [];
  constructor(private route: ActivatedRoute, private gameService: GameService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const paramsId = params['id'].split('-').join(' ');
      this.games = this.gameService.getGamesByPlatform(paramsId);
    });

    this.gameService.gamesChange.subscribe((games: Game[]) => {
      this.games = games;
    })
  }
}

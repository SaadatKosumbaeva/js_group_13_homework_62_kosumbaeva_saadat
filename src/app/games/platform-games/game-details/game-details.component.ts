import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GameService } from '../../../shared/game.service';
import { Game } from '../../../shared/game.model';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  games: Game[] = [];
  game!: Game;
  constructor(private route: ActivatedRoute, private gameService: GameService) { }

  ngOnInit(): void {
    const paramId = this.route.snapshot.url[1].path.split('-').join(' ');
    this.route.params.subscribe((params: Params) => {
      const gameId = parseInt(params['id']);
      this.games = this.gameService.getGamesByPlatform(paramId);
      this.game = this.games[gameId];
    })

    console.log(this.route);
  }
}

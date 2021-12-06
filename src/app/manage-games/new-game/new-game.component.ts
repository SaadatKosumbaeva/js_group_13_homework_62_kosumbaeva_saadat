import { Component } from '@angular/core';
import { GameService } from '../../shared/game.service';
import { Game } from '../../shared/game.model';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent {
  name = '';
  imageUrl = '';
  platform = 'nes';
  description = '';

  constructor(private gameService: GameService) { }

  addGame() {
    const game = new Game(this.name, this.imageUrl, this.platform, this.description);
    this.gameService.addGame(game);
  }
}

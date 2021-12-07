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

  constructor(private gameService: GameService) {
  }

  addGame() {
    if (this.name.trim().length && this.imageUrl.trim().length && this.description.trim().length) {
      const game = new Game(this.name, this.imageUrl, this.platform, this.description);
      this.gameService.addGame(game);

      this.name = '';
      this.imageUrl = '';
      this.platform = 'nes';
      this.description = '';
    }
  }
}

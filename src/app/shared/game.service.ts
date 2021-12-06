import { Game } from './game.model';

export class GameService {
  private games: Game[] = [];

  getGames() {
    return this.games.slice();
  }

  getGamesByPlatform(platform: string) {
    return this.games.filter(game => game.platform === platform);
  }

  addGame(game: Game) {
    const existingGame = this.games.find(gameItem => gameItem.name === game.name);

    if (existingGame) return;
    this.games.push(game);
  }
}

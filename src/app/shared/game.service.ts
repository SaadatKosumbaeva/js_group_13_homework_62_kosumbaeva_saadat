import { Game } from './game.model';
import { EventEmitter } from '@angular/core';

export class GameService {
  gamesChange = new EventEmitter<Game[]>();
  private games: Game[] = [
    new Game('World Of Tanks', 'https://softcatalog.info/sites/default/files/styles/program_logo_teaser_small/public/program/logo/world-tanks-logo.png', 'nes', 'World of Tanks перенесет пользователя во времена Второй мировой войны, основной задачей станет оказание помощи дружественным силам в одержании победы над соперниками. Игроку потребуется контролировать собственный танк, выполняя обязанности не только рулевого и наводчика, а еще и командира, принимающего стратегически важные решения.'),
    new Game('King of Avalon: Dragon Warfare', 'https://softcatalog.info/sites/default/files/styles/program_logo_teaser_small/public/program/logo/korol_avalona_bitva_drakonov_android-logo.png', 'nes', 'King of Avalon: Dragon Warfare для ПК понравится поклонникам телесериала «Игра Престолов». Уверенно отражайте атаки врагов и одерживайте победу над всеми претендентами на трон. Не упустите шанс получить крылатого огнедышащего дракона и станьте единственным владыкой фэнтезийного мира.'),
    new Game('Rise of Civilizations', 'https://softcatalog.info/sites/default/files/styles/program_logo/public/program/logo/rise_of_civilizations_android-logo.png', 'sega genesis', 'Rise of Civilizations — великолепная игра в жанре «стратегии», обладающая потрясающей графикой и геймплеем. Окунитесь в захватывающий процесс строительства и развития своей цивилизации. Создавайте легендарных героев, которые возглавят целые армии и ведите их на поле боя с другими игроками, ваша главная цель — мировое господство!'),
    new Game('Goddess: Primal Chaos', 'https://softcatalog.info/sites/default/files/styles/program_logo/public/program/logo/goddess_primal_chaos_-_ru_free_3d_action_mmorpg_android-logo.png', 'sega genesis', 'Goddess: Primal Chaos — популярная ролевая игра нового поколения, в которой вас ждут захватывающие путешествия во времени. По сюжету RPG вам предстоит создать собственного персонажа и спасти человечество и весь мир от монстров, духов, демонов и прочего зла.'),
    new Game('Merge Dragons!', 'https://softcatalog.info/sites/default/files/styles/program_logo/public/program/logo/merge_dragons_android-logo.png', 'super nintendo', 'Игра Merge Dragons на компьютер перенесет вас в сказочное королевство Дракония. Выращивайте и защищайте волшебных существ от влияния злых сил. Увлекательная головоломка обладает современной графикой и занимательным геймплеем, способным привлечь ваше внимание с первых минут.'),
    new Game('AFK Arena', 'https://softcatalog.info/sites/default/files/styles/program_logo/public/program/logo/afk_arena_android-logo.png', 'super nintendo', 'AFK Arena перенесёт игрока в мистические лабиринты Эсперии, расположенные в Вершинах времени. Насладитесь захватывающим путешествием, собирайте карты уникальных героев, создавайте фракции с друзьями и участвуйте в эпических сражениях с сотнями врагов со всего мира.'),
  ];

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
    this.gamesChange.emit(this.games);
  }
}

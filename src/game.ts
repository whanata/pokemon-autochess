import { Game } from 'phaser';
import { BootScene } from './scenes/boot.scene';

export class PokemonAutochessGame extends Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

window.onload = () => {
  const game = new PokemonAutochessGame({
    type: Phaser.AUTO,
    parent: 'canvas',
    width: 800,
    height: 600,
    backgroundColor: '#004400',
    scene: [BootScene],
  });
};
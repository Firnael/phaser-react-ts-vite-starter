import 'phaser';
import { GameScene } from '../Scenes/GameScene';

const config: Phaser.Types.Core.GameConfig = {
    title: "New Game",
    version: '1.0',
    width: 1280,
    height: 720,
    type: Phaser.AUTO,
    parent: 'game', // needs a div as id="game"
    scene: [
      GameScene
    ],
    input: {
      keyboard: true
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
        debug: false
      }
    },
    backgroundColor: '#221e30',
    render: { pixelArt: true, antialias: true }
  };

export default config;
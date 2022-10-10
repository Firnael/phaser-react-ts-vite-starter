import 'phaser'

export class GameScene extends Phaser.Scene {
	private CANVAS!: Phaser.Game["canvas"]

	constructor() {
		super({
			key: 'GameScene'
		})
	}

	preload(): void {
	}

	create(): void {
		this.CANVAS = this.sys.game.canvas;
	}

	update(): void {
	}
}
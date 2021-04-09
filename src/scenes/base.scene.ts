export abstract class BaseScene extends Phaser.Scene {
    get game_width(): number {
        return <number> this.game.config.width
    }

    get game_height(): number {
        return <number> this.game.config.height
    }
}

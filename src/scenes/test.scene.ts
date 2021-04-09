import { BaseScene } from './base.scene'
import { SceneEnum } from '../scene.enum'

export class TestScene extends BaseScene {
    #shell: Phaser.GameObjects.Sprite
    constructor () {
        super(SceneEnum.Game)
    }

    public preload (): void {
        this.load.spritesheet(
            'mario-sprites',
            'assets/images/mario-sprites.png',
            {
                frameWidth: 16,
                frameHeight: 32
            }
        )
    }

    public get shell(): Phaser.GameObjects.Sprite {
        return this.#shell
    }

    public create (): void {
        const scale_factor = this.game_width / this.game_height * window.devicePixelRatio

        this.#shell = this.add.sprite(0, 0, 'mario-sprites', 33)
        this.#shell.setData('velocity', [1.5 * scale_factor, 1.5 * scale_factor])

        console.log('scaling factor = ', scale_factor)
        this.#shell.setScale(scale_factor)
    }

    private check_arena_collision(): void {
        const shell_x = this.shell.x
        const shell_y = this.shell.y
        const shell_dims = { w: 16, h: 32 }

        if (
            (shell_y <= 0 && this.shell.getData('velocity')[1] < 0.0)
            || (shell_y >= (this.game.config.height as number) - (shell_dims.h / 2) && this.shell.getData('velocity')[1] > 0.0)
        ) {
            this.shell.setData('velocity', [ this.shell.getData('velocity')[0], -this.shell.getData('velocity')[1] ])
        }

        if (
            (shell_x <= 0 && this.shell.getData('velocity')[0] < 0.0)
            || (shell_x >= (this.game_width) - (shell_dims.w / 2) && this.shell.getData('velocity')[0] > 0.0)
        ) {
            this.shell.setData('velocity', [ -this.shell.getData('velocity')[0], this.shell.getData('velocity')[1] ])
        }
    }

    public update (time: number, delta: number): void {
        this.check_arena_collision()

        this.shell.x += this.shell.getData('velocity')[0]
        this.shell.y += this.shell.getData('velocity')[1]
    }
}

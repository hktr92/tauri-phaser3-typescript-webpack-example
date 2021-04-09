import 'phaser'
import { TestScene } from './scenes/test.scene'

/**
 * Classic Phaser configuration file.
 *
 * But with an added bonus: width and height is the actual innerWidth and innerHeight provided by Tauri WebView.
 * This will allow you to use Tauri resize without any issues.
 */
const config: Phaser.Types.Core.GameConfig = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.AUTO,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: window.innerWidth,
    height: window.innerHeight,
    scene: [
        TestScene
    ]
}

const game = new Phaser.Game(config) // eslint-disable-line no-unused-vars

// Reload the current page on window resize.
// Currently it is the best solution to resize the game.
// If there's any other **working** solution, feel free to submit a PR. :)
window.addEventListener('resize', () => {
    window.location.reload()
})

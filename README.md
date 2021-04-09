# Tauri + Phaser 3 + TypeScript + Webpack

This example project will help you get started with Phaser 3, TypeScript, Webpack and Tauri.

This repository is targeted for those who wants to make a desktop game using Phaser 3 and wants to keep it simple with desktop integration.

## About this example
Assets are taken from [here - Phaser 3 + ES6 + Webpack](https://github.com/nkholski/phaser3-es6-webpack).

## Why Tauri?
I've tried to get started with both Electron and nw.js, but there were some issues I've encountered listed below.

Simply put, there were some main advantages of Tauri over others:
- Written in Rust. I love Rust, and having the possibility to write code in Rust for my game's logic is a huge win to me.
- Easy to integrate. They stated that Tauri can be integrated in **any** frontend app, and that's true.
- Easy to configure. Having a separate config file is a good idea.
- Small memory footprint. The tauri exe itself on Windows is using ~2 MB of RAM. Webview part is normal to use this much, as it handles JS code. The final RAM usage depends on your game's code (if you wrote it well or not).
- Small disk footprint. The setup bundle is ~2 MB in disk usage, and the final game exe is almost double of it and includes (not in this project, tho): 
    - a single HTML file, 
    - 4 `.ttf` font files,
    - 5 uncompressed 200x100 `.png` images (game characters),
    - a single CSS file that loads the font
    - a 4K `.jpg` file
    - a 20.3 MB JavaScript bundled from TypeScript with webpack

Be aware that there are some limitations of Tauri which will be resolved in the future:
- (v0.14.1) In the latest version, you can't tell Tauri to close the window from js / ts environment (feature will be added in the next release)
- even if `winit`, the windowing component, supports Android / iOS, Tauri does not support yet this kind of targeting. It will come, and not a big concern of me yet.
- if you want to add custom files to your setup to be extracted (e.g. a "thank you" gift containing in some manual / extra audio / whatever), I couldn't find anything about it in the documentation I've made. I'm sure there's something that can be done by asking devs on Discord.

From a macro point of view, these limitations feels like nothing compared to what advantages have Tauri over everything else.

#### Why not Electron?
Simply put, Electron is too big for so little. The final build was big, and the memory usage for a simple canvas draw was bigger.
I also wanted to be able to test the game on a web browser without any shims or `globalThis`.

The main cons of Electron were:
- big memory usage. I'm using Electron apps on daily basis (Microsoft Teams, Skype, Discord) which each of them uses ~200mb of RAM usage.
- hard to understand API: it's simply too... overkill for something so simple.
- cannot be integrated into an existing project. I had to rewrite the game to be able to use Electron.

#### Why not nw.js?
First alternative to Electron that came in my mind was nwjs. It was nice to make it work, but there were also some drawbacks.

The main cons of nwjs were:
- I had to make a `.bat` / `.sh` file to run the game. Nope.
- I had to polyfill `globalThis` to access `window.nw`... weird.
- unable to bundle the game.
- window config inside `package.json`. I didn't like this, as I wanted it to be customizable from game's options.

Don't get me wrong, NW is a good alternative to Electron, but there were some stuff that made me go away from it.

## Setup
Requirements:
- Node v15.x
- Yarn v1.22
- Rust v1.51
- Tauri v0.14

For a proper installation of these and other requirements, please see [introduction page](https://tauri.studio/en/docs/getting-started/intro) on Tauri documentation.

## Development
It's pretty simple:

- install dependencies: `yarn`
- start dev server: `yarn dev-server`
- start tauri: `tauri dev` or `yarn tauri dev`

## Release
One-liner:
- `yarn build`

It will execute `yarn build:webpack` and then `yarn build:tauri`.

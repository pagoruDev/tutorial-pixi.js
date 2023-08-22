
import {Application, Sprite, Texture, Ticker} from './pixi.mjs'

const app = new Application({
	// width: 800,
	// height: 600,
	resizeTo: window,
	backgroundColor: 0xFF00F0,
	antialias: true,
	sharedTicker: true,
	hello: true,
	powerPreference: 'high-performance',
	resolution: 1
});

document.body.appendChild(app.view)

const sprite = Sprite.from('assets/duck.png');
app.stage.addChild(sprite);

//Ticker.shared.add()
app.ticker.add((delta: number) => {
	sprite.x += delta * 5;
})
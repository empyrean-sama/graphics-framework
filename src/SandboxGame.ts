import Vec2 from "vec2";
import Game from "./Toolbox/Game";
import Graphics from "./Toolbox/Graphics";

import { worldToScreen } from "./Toolbox/CoordinateTransformer";

export default class SandboxGame extends Game {

    constructor(graphics: Graphics) {
        super(graphics);
    }

    public updateFrame(dt: number): void {
       this.gfx.drawPolyline([
           worldToScreen(new Vec2(0, 0)),
           worldToScreen(new Vec2(100, 100)),
           worldToScreen(new Vec2(-100, -200)),
       ], 'red');
    }
}
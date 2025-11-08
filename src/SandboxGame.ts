import Vec2 from "vec2";
import Game from "./Toolbox/Game";
import Graphics from "./Toolbox/Graphics";

import { worldToScreen } from "./Toolbox/CoordinateTransformer";
import Entity from "./Toolbox/Entity";
import StarEntity from "./Entities/Star";

export default class SandboxGame extends Game {

    public star: Entity;

    constructor(graphics: Graphics) {
        super(graphics);
        this.star = StarEntity.createStar(5, 50, 100, new Vec2(0, 0), new Vec2(1, 1), 'red');

        window.addEventListener('wheel', (event: WheelEvent) => {
            const scrollDown = event.deltaY > 0;
            if(scrollDown) {
                this.star.scale(.95);
            } else {
                this.star.scale(1.05);
            } 
        });

        window.addEventListener('keydown', (event: KeyboardEvent) => {
            switch(event.key) {
                case 'ArrowUp':
                    this.star.translateY(1);
                    break;
                case 'ArrowDown':
                    this.star.translateY(-1);
                    break;
                case 'ArrowLeft':
                    this.star.translateX(-1);
                    break;
                case 'ArrowRight':
                    this.star.translateX(1);
                    break;
            }
        });

    }

    public updateFrame(dt: number): void {
        this.star.getDrawable().drawToScreen(this.gfx);
    }
}
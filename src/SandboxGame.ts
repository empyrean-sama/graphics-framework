import Vec2 from "vec2";
import Game from "./Toolbox/Game";
import Graphics from "./Toolbox/Graphics";

import Camera from "./Toolbox/Camera";
import Entity from "./Toolbox/Entity";
import StarEntity from "./Entities/Star";

export default class SandboxGame extends Game {

    private _star: Entity;
    private _camera: Camera;

    constructor(graphics: Graphics) {
        super(graphics);
        this._star = StarEntity.createStar(5, 50, 100, new Vec2(0, 0), new Vec2(1, 1), 'red');
        this._camera = new Camera(new Vec2(0, 0), new Vec2(1, 1));

        window.addEventListener('wheel', (event: WheelEvent) => {
            const scrollDown = event.deltaY > 0;
            if(scrollDown) {
                this._star.scale(.95);
            } else {
                this._star.scale(1.05);
            } 
        });

        window.addEventListener('keydown', (event: KeyboardEvent) => {
            switch(event.key) {
                case 'ArrowUp':
                    this._star.translateY(5);
                    break;
                case 'ArrowDown':
                    this._star.translateY(-5);
                    break;
                case 'ArrowLeft':
                    this._star.translateX(-5);
                    break;
                case 'ArrowRight':
                    this._star.translateX(5);
                    break;
                case 'w':
                    this._camera.moveCamera(new Vec2(0, 5)); 
                    break;
                case 's':
                    this._camera.moveCamera(new Vec2(0, -5));
                    break;
                case 'a':
                    this._camera.moveCamera(new Vec2(-5, 0));
                    break;
                case 'd':
                    this._camera.moveCamera(new Vec2(5, 0));
                    break;
            }
        });

        let dragStartPos: Vec2 | null = null;
        let isDragging = false;
        const leftMouseButton = 0;
        window.addEventListener('mousedown', (event: MouseEvent) => {
            if(event.button === leftMouseButton) { 
                isDragging = true;
                dragStartPos = new Vec2(event.clientX, event.clientY);
            }
        });
        window.addEventListener('mouseup', (event: MouseEvent) => {
            if(event.button === leftMouseButton) {
                isDragging = false;
            }
        });
        window.addEventListener('mousemove', (event: MouseEvent) => {
            if(isDragging && dragStartPos) {
                let delta = dragStartPos.subtract(new Vec2(event.clientX, event.clientY));
                dragStartPos = new Vec2(event.clientX, event.clientY);
                this._camera.moveCamera(new Vec2(delta.x, -1 * delta.y));
            }
        });
    }

    public updateFrame(dt: number): void {
        this._star.getDrawable().drawToScreen(this.gfx, this._camera);
    }
}
import Vec2 from "vec2";
import Graphics from "./Graphics";

export default class Drawable {
    private _scaleFactor: Vec2 = new Vec2(1.0, 1.0);
    private _translate: Vec2 = new Vec2(0, 0);
    private _polyline: Array<Vec2>;

    private _color: string = 'red';

    constructor(polyline: Array<Vec2>, color: string = 'red', scaleFactor: Vec2 = new Vec2(1.0, 1.0), translate: Vec2 = new Vec2(0,0)) {
        this._polyline = polyline;
        this._color = color;
        this._scaleFactor = scaleFactor;
        this._translate = translate;
    }

    public scaleX(factor: number) {
        const newScaleX = this._scaleFactor.x * factor;
        this._scaleFactor = new Vec2(newScaleX, this._scaleFactor.y);
    }
    public scaleY(factor: number) {
        const newScaleY = this._scaleFactor.y * factor;
        this._scaleFactor = new Vec2(this._scaleFactor.x, newScaleY);
    }
    public scale(factor: number) {
        this.scaleX(factor);
        this.scaleY(factor);
    }
    public setScale(scaleFactor: Vec2) {
        this._scaleFactor = scaleFactor;
    }
    public getScale(): Vec2 { 
        return this._scaleFactor;
    }

    // public translateX(offset: number) {
    //     const newTranslateX = this._translate.x + offset;
    //     this._translate = new Vec2(newTranslateX, this._translate.y);
    // }
    // public translateY(offset: number) {
    //     const newTranslateY = this._translate.y + offset;
    //     this._translate = new Vec2(this._translate.x, newTranslateY);
    // }
    // public translate(offset: Vec2) {
    //     const newTranslateX = this._translate.x + offset.x;
    //     const newTranslateY = this._translate.y + offset.y;
    //     this._translate = new Vec2(newTranslateX, newTranslateY);
    // }

    public drawToScreen(gfx: Graphics) {
        const transformedPoints = this._polyline.map(pt => pt.multiply(this._scaleFactor, true));
        gfx.drawClosedPolyline(transformedPoints, this._color);
    }
}
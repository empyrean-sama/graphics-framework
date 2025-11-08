import Vec2 from "vec2";
import Drawable from "./Drawable";

export default abstract class Entity {
    private _polyline: Array<Vec2>;
    private _color: string = 'red';

    protected constructor(polyline: Array<Vec2>, color: string = 'red') {
        this._polyline = polyline;
        this._color = color;
    }

    public getDrawable(): Drawable {
        return new Drawable(this._polyline, this._color);
    }
}
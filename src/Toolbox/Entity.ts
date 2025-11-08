import Vec2 from "vec2";
import Drawable from "./Drawable";

export default abstract class Entity {
    private _polyline: Array<Vec2>;
    private _color: string = 'red';
    private _scaleFactor: Vec2 = new Vec2(1.0, 1.0);
    private _translate: Vec2 = new Vec2(0, 0);

    protected constructor(polyline: Array<Vec2>, position: Vec2 = new Vec2(0,0), scaleFactor: Vec2 = new Vec2(1.0, 1.0), color: string = 'red') {
        this._polyline = polyline;
        this._color = color;
        this._translate = position;
        this._scaleFactor = scaleFactor;
    }

    /**
     * Gets the color of the drawable object.
     * @returns color string
     */
    public getColor(): string {
        return this._color;
    }

    /**
     * Gets the polyline points of the drawable object.
     * @returns array of Vec2 points
     */
    public getPolyline(): Array<Vec2> { 
        return this._polyline;
    }

    /**
     * Scales the drawable object in the x direction.
     * @param factor: scaling factor
     * @returns void
     */
    public scaleX(factor: number): void {
        // Any new scale in x direction also effects the translation built up in x direction
        this._translate = this._translate.multiply(new Vec2(factor, 1), true);
        const newScaleX = this._scaleFactor.x * factor;
        this._scaleFactor = new Vec2(newScaleX, this._scaleFactor.y);
    }
    /**
     * Scales the drawable object in the y direction.
     * @param factor: scaling factor
     * @returns void
     */
    public scaleY(factor: number): void {
        // Any new scale in y direction also effects the translation built up in y direction
        this._translate = this._translate.multiply(new Vec2(1, factor), true);
        const newScaleY = this._scaleFactor.y * factor;
        this._scaleFactor = new Vec2(this._scaleFactor.x, newScaleY);
    }
    /**
     * Scales the drawable object uniformly.
     * @param factor: scaling factor
     * @returns void
     */
    public scale(factor: number): void {
        // Any new scale in any direction also effects the translation built up in that direction
        this._translate = this._translate.multiply(new Vec2(factor, factor), true);
        this.scaleX(factor);
        this.scaleY(factor);
    }
    /**
     * Sets the scale of the drawable object.
     * @param factor: new scale factor
     */
    public setScale(factor: Vec2): void {
        const scaleXFactor = factor.x / this._scaleFactor.x;
        const scaleYFactor = factor.y / this._scaleFactor.y;
        this._translate = this._translate.multiply(new Vec2(scaleXFactor, scaleYFactor), true);
        this._scaleFactor = factor;
    }
    public getScale(): Vec2 { 
        return this._scaleFactor;
    }

    /**
     * Translates the drawable object in the x direction.
     * @param offset: translation offset
     */
    public translateX(offset: number): void {
        const newTranslateX = this._translate.x + offset;
        this._translate = new Vec2(newTranslateX, this._translate.y);
    }
    /**
     * Translates the drawable object in the y direction.
     * @param offset: translation offset
     */
    public translateY(offset: number): void {
        const newTranslateY = this._translate.y + offset;
        this._translate = new Vec2(this._translate.x, newTranslateY);
    }
    /**
     * Translates the drawable object.
     * @param offset: translation offset
     */
    public translate(offset: Vec2): void {
        const newTranslateX = this._translate.x + offset.x;
        const newTranslateY = this._translate.y + offset.y;
        this._translate = new Vec2(newTranslateX, newTranslateY);
    }
    /**
     * Gets the translation vector of the drawable object.
     * @returns translation vector
     */
    public getTranslate(): Vec2 { 
        return this._translate;
    }
    /**
     * Sets the translation vector of the drawable object.
     * @param translate: new translation vector
     */
    public setTranslate(translate: Vec2): void {
        this._translate = translate;
    }
    

    public getDrawable(): Drawable {
        return new Drawable(this);
    }
}
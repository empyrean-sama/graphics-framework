import Vec2 from "vec2";
import Graphics from "./Graphics";
import { worldToScreen } from "./CoordinateTransformer";
import Entity from "./Entity";

export default class Drawable {
    
    private _entity: Entity;

    /**
     * Constructor for Drawable object.
     * Constructs a light weight drawable object form an entity.
     * @param entity: the entity to create drawable from
     */
    constructor(entity: Entity) {
        this._entity = entity;
    }

    /**
     * Draws the drawable object to the screen.
     * @param gfx: Graphics context
     */
    public drawToScreen(gfx: Graphics): void {
        const polyline = this._entity.getPolyline();
        const transformedPoints = polyline
            .map(pt => pt.multiply(this._entity.getScale(), true))
            .map(pt => pt.add(this._entity.getTranslate(), true))
            .map(pt => worldToScreen(pt))
        gfx.drawClosedPolyline(transformedPoints, this._entity.getColor());
    }
}
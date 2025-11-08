import Vec2 from "vec2";

export default class Camera {
    private _position: Vec2;
    private _zoom: Vec2;

    constructor(position: Vec2 = new Vec2(0,0), zoom: Vec2 = new Vec2(1,1)) {
        this._position = position;
        this._zoom = zoom;
    }

    /**
     * Get the current position of the camera.
     * @returns a Vec2 representing the camera's position in world coordinates.
     */
    public getLocation(): Vec2 {
        return this._position;
    }
    /**
     * Move the camera by a certain amount.
     * @param delta The amount to move the camera.
     */
    public moveCamera(delta: Vec2): void {
        this._position = this._position.add(delta);
    }
    /**
     * Set the current position of the camera.
     * @param position A Vec2 representing the new position of the camera.
     */
    public setLocation(position: Vec2): void {
        this._position = position;
    }

    /**
     * Get the current zoom level of the camera.
     * @returns a Vec2 representing the camera's zoom level.
     */
    public getZoom(): Vec2 {
        return this._zoom;
    }
    /**
     * Change the zoom level of the camera.
     * @param factor The factor by which to change the zoom level.
     */
    public changeZoom(factor: number): void {
        this._position = this._position.multiply(factor);
        this._zoom = this._zoom.multiply(factor);
    }
    /**
     * Set the zoom level of the camera.
     * @param zoom A Vec2 representing the new zoom level.
     */
    public setZoom(zoom: Vec2): void {
        const zoomFactor = zoom.divide(this._zoom);
        this._position = this._position.multiply(zoomFactor);
        this._zoom = zoom;
    }
}
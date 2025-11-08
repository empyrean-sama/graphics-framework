import Graphics from "./Graphics";

export default abstract class Game {
    protected gfx: Graphics;
    
    constructor(graphics: Graphics) {
        this.gfx = graphics;
    }
    
    /**
     * Use this method to update the game state and render the next frame.
     * This method is called on each animation frame.
     * @param dt The time elapsed since the last frame, in milliseconds.
     */
    public abstract updateFrame(dt: number): void;
    
    /**
     * Advances the game by one frame.
     */
    public advanceGame(dt: number) {
        this.gfx.clearScreen();
        this.updateFrame(dt);
    }
}
import Vec2 from "vec2";

/**
 * Convert world coordinates to screen coordinates.
 * @param worldPos: Position in world coordinates.
 * @returns Position in screen coordinates.
 */
export function worldToScreen(worldPos: Vec2): Vec2 {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const xPos = (worldPos.x + screenWidth / 2);
    const yPos = (screenHeight / 2 - worldPos.y);

    return new Vec2(xPos, yPos);
}
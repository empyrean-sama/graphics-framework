import Vec2 from 'vec2';

export default class Graphics {
    
    private ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    /**
     * Clear the entire screen.
     * This will remove all drawings from the canvas.
     * Use this method to reset the canvas before drawing a new frame.
     */
    public clearScreen() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    /**
     * Draw a line from one point to another.
     * Screen coordinates have 0,0 at top left +ve y down.
     * @param p1 - The starting point in screen coordinates.
     * @param p2 - The ending point in screen coordinates.
     * @param color - The color of the line.
     */
    public drawLine(p1: Vec2, p2: Vec2, color: string = 'black') {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(p2.x, p2.y);
        this.ctx.stroke();
    }

    /**
     * Draw a polyline connecting a series of points.
     * Screen coordinates have 0,0 at top left +ve y down.
     * @param points - The points to connect in screen coordinates.
     * @param color - The color of the polyline.
     */
    public drawPolyline(points: Vec2[], color: string = 'black') {

        if(points.length < 2) {
            console.error("drawPolyline requires at least 2 points.");
            return;
        }

        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            this.ctx.lineTo(points[i].x, points[i].y);
        }
        this.ctx.stroke();
    }

    /**
     * Draw a closed polyline connecting a series of points.
     * Screen coordinates have 0,0 at top left +ve y down.
     * @param points - The points to connect in screen coordinates.
     * @param color - The color of the polyline.
     */
    public drawClosedPolyline(points: Vec2[], color: string = 'black') {

        if(points.length < 2) {
            console.error("drawClosedPolyline requires at least 2 points.");
            return;
        }

        this.drawPolyline(points, color);
        this.ctx.closePath();
        this.ctx.stroke();
    }
}
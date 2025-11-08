import Vec2 from 'vec2';
import Entity from '../Toolbox/Entity';

export default class Star extends Entity {

    /**
     * Creates a star shaped entity. 
     * Setting innerRadius equal to outerRadius will create a circle.
     * @param flareCount: Number of flares on the star. 
     * @param innerRadius: Inner radius of the star.
     * @param outerRadius: Outer radius of the star.
     * @param color: Color of the star.
     * @throws Error if flareCount is less than 2.
     */
    constructor(flareCount: number, innerRadius: number, outerRadius: number, color: string = 'red') {
        flareCount = Math.ceil(flareCount);
        if(flareCount < 2) {
            throw new Error('A star must contain atleast two flares');
        }

        const angleJump = Math.PI / flareCount;
        const points: Array<Vec2> = [];
        for(let i=0; i<flareCount*2; i++) {
            const selectRadius = i%2 == 0 ? outerRadius : innerRadius;
            points.push(new Vec2({ x: Math.cos(angleJump * i) * selectRadius, y: Math.sin(angleJump * i) * selectRadius }));
        }

        super(points, color);
    }

    /**
     * Creates a star shaped entity. 
     * Setting innerRadius equal to outerRadius will create a circle.
     * @param flareCount: Number of flares on the star. 
     * @param innerRadius: Inner radius of the star.
     * @param outerRadius: Outer radius of the star.
     * @param color: Color of the star.
     * @throws Error if flareCount is less than 2.
     */
    public static createStar(flareCount: number, innerRadius: number, outerRadius: number, color: string = 'red'): Star {
        return new Star(flareCount, innerRadius, outerRadius, color);
    }
}
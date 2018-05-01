/**
 * MyWheel
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyWheel extends CGFobject
{
	constructor(scene)
	{
        super(scene);

        this.axis = new MyCylinder(scene, 12, 6);
        this.tire = new MyCylinder(scene, 12, 6);

    };

    display()
    {
        
    };

}

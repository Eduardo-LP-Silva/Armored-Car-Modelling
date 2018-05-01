/**
 * MyVehicle
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyVehicle extends CGFobject
{
	constructor(scene)
	{
        super(scene);
        
        this.chassis = new MyChassis(scene);
        this.turret = new MyTurret(scene);
        this.ruler = new MyUnitCubeQuad(scene);
    };

    display()
    {
        this.scene.pushMatrix();
            this.scene.scale(0.8,0.8,0.8);
            this.chassis.display();
        this.scene.popMatrix();

        this.scene.pushMatrix()
            this.scene.translate(-0.3, 1.35, -0.5);
            this.turret.display();  
        this.scene.popMatrix();
        
    };

}
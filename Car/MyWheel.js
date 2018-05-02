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

        this.axis = new MyDisk(scene, 12);
        this.tire = new MyCylinder(scene, 12, 6);

        this.wheel = new CGFappearance(scene);
        this.wheel.loadTexture("../resources/images/wheel.png");

    };

    display()
    {
        //Tire
        this.scene.pushMatrix();
            this.scene.scale(0.5,0.5,0.07);
            this.scene.translate(0.5,0.5,0.5);
            this.tire.display();
        this.scene.popMatrix();

        //Axis
        this.scene.pushMatrix();
            this.scene.translate(0,0,0.35);
            this.scene.scale(0.5,0.5,0.07);
            this.scene.translate(0.5,0.5,0.5);
            this.wheel.apply();
            this.axis.display();
        this.scene.popMatrix();

        //Inside Wheel
        this.scene.pushMatrix();
            this.scene.scale(0.5,0.5,0.07);
            this.scene.translate(0.5,0.5,0.5);
            this.axis.display();
        this.scene.popMatrix();
    };

}

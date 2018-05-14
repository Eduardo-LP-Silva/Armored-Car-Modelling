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

		this.AmbTire = new CGFappearance(scene);
        this.AmbTire.loadTexture("../resources/images/tire.png");
        
        this.black = new CGFappearance(scene);
        this.black.loadTexture("../resources/images/black.png");

        this.lastUpdateTime = -1;
        this.radius = 0.5;
        this.ang = 0;

    };

    display()
    {
        //Tire
        this.scene.pushMatrix();
            this.scene.rotate(Math.PI / 2, 0, 1, 0);
            this.scene.scale(0.5,0.5,0.07);
			this.AmbTire.apply();
            this.tire.display();
        this.scene.popMatrix();

        //Axis
        this.scene.pushMatrix();
            this.scene.rotate(Math.PI / 2, 0, 1, 0);
            this.scene.translate(0,0,0.35);
            this.scene.scale(0.5,0.5,0.07);
            this.wheel.apply();
            this.axis.display();
        this.scene.popMatrix();

        //Inside Wheel
        this.scene.pushMatrix();
            this.scene.rotate(Math.PI / 2, 0, 1, 0);
            this.scene.scale(0.5,0.5,0.07);
            this.black.apply();
            this.axis.display();
        this.scene.popMatrix();
    };

    advance(velocity, currTime)
    {
        if(this.lastUpdateTime == -1)
            this.lastUpdateTime = currTime;

        this.ang = velocity * ((currTime - this.lastUpdateTime) / 1000) / this.radius;
    };

}

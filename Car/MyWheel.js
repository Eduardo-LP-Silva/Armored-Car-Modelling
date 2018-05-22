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

        this.lastUpdateTime = -1; // Last registered time
        this.radius = 0.5;
        this.ang = 0; // Forwards/Backwards movement angle
        this.turningAngle = 0; // Turning Angle

    };

    display()
    {
        this.scene.pushMatrix();
            this.scene.rotate(this.turningAngle, 0, 1, 0); // Rotate left/right
            this.scene.rotate(this.ang, 1, 0, 0); // Rotate forwards/backwards
            this.scene.rotate(Math.PI / 2, 0, 1, 0); // Rotate so the tire will be facing the Z axis

            //Tire
            this.scene.pushMatrix();
                this.scene.scale(0.5,0.5,0.07);
                this.AmbTire.apply();
                this.tire.display();
            this.scene.popMatrix();

            //Axis
            this.scene.pushMatrix();
                this.scene.translate(0,0,0.35);
                this.scene.scale(0.5,0.5,0.07);
                this.wheel.apply();
                this.axis.display();
            this.scene.popMatrix();

            //Inside Wheel
            this.scene.pushMatrix();
                this.scene.scale(0.5,0.5,0.07);
                this.wheel.apply();
                this.axis.display();
            this.scene.popMatrix();

        this.scene.popMatrix();
    };

    // Rotates forwards/backwards according to car velocity
    
    advance(velocity, currTime)
    {
        if(this.lastUpdateTime == -1)
            if(velocity > 0)
                this.ang += 0.1;
            else
                this.ang -= 0.1;
        else
            this.ang += velocity * ((currTime - this.lastUpdateTime) / 1000) / this.radius;

        this.lastUpdateTime = currTime;
    };
}

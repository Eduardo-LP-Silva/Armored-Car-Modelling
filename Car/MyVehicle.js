class MyVehicle extends CGFobject
{
	constructor(scene)
	{
        super(scene);

        this.lastUpdatedTime = -1; // Last time registered
        this.lastUpdatedTurningTime = -1; // Last time registered regarding wheel turning
        this.travelDistanceX = 0; // Distance travelled in the X axis
        this.travelDistanceZ = 0; // Distance travelled in the Z axis
        this.velocity = 0; 
        this.acceleration = 10;
        this.turnAngle = 0; // Turning angle

        this.chassis = new MyChassis(scene);
        this.turret = new MyTurret(scene);
        this.support = new MyUnitCubeQuad(scene); // Mirror support
        this.mirror = new MyMirror(scene);
        this.frontWheel = new MyWheel(scene);
        this.backWheel = new MyWheel(scene);
        this.light = new MyLamp(scene, 12, 2);
		this.lamp = new MyLamp(scene, 20, 20, 0.25); // Headlights

        this.metal = new CGFappearance(scene);
        this.metal.loadTexture("../resources/images/darkMetal.jpg");

		this.farol = new CGFappearance(scene); // Headlight texture
        this.farol.loadTexture("../resources/images/farois.jpg");
    };

    display()
    {

        this.scene.pushMatrix();
        this.scene.translate(this.travelDistanceX, 0, this.travelDistanceZ); // Move
        this.scene.rotate(this.turnAngle, 0, 1, 0); // Turn
        this.scene.rotate(Math.PI / 2, 0, 1, 0); // Rotate to be in the same direction as the X axis
        this.scene.translate(0, 0.25, 0); // Elevate slightly

            //Chassis
            this.scene.pushMatrix();
                this.scene.translate(0,0,2);
                this.scene.scale(0.8,0.8,0.8);
                this.chassis.display();
            this.scene.popMatrix();

            //Turret
            this.scene.pushMatrix();
                this.scene.translate(-0.3, 1.35, 1.5);
                this.turret.display();
            this.scene.popMatrix();

            //Left Mirror
            this.scene.pushMatrix();
                this.scene.translate(1, 2.1, 3.5);
                this.mirror.display();
            this.scene.popMatrix();

            //Right Mirror
            this.scene.pushMatrix();
                this.scene.translate(-1, 2.1, 3.5);
                this.mirror.display();
            this.scene.popMatrix();

            //Right Mirror Support
            this.scene.pushMatrix();
                this.scene.translate(-1,1.1,3.5);
                this.scene.scale(0.2,0.05,0.05);
                this.scene.translate(0.5, 0.5, 0.5);
                this.metal.apply();
                this.support.display();
            this.scene.popMatrix();

            //Left Mirror Support
            this.scene.pushMatrix();
                this.scene.translate(0.8,1.1,3.5);
                this.scene.scale(0.2,0.05,0.05);
                this.scene.translate(0.5, 0.5, 0.5);
                this.metal.apply();
                this.support.display();
            this.scene.popMatrix();

            //Front Left Wheel
            this.scene.pushMatrix();
                this.scene.translate(0.8,0.25,3.5);
                this.frontWheel.display();
            this.scene.popMatrix();

            //Front Rigth Wheel
            this.scene.pushMatrix();
                this.scene.translate(-1.15,0.25,3.5);
                this.frontWheel.display();
            this.scene.popMatrix();

            //Back Left Wheel
            this.scene.pushMatrix();
                this.scene.translate(0.8,0.25, 0.8);
                this.backWheel.display();
            this.scene.popMatrix();

            //Back Rigth Wheel
            this.scene.pushMatrix();
                this.scene.translate(-1.15,0.25, 0.8);
                this.backWheel.display();
            this.scene.popMatrix();

            //Rigth lamp
            this.scene.pushMatrix();
                this.scene.scale(0.5,0.5,0.5);
                this.scene.translate(1, 1.5, 10);
                this.scene.rotate(-Math.PI / 3, 1, 0, 0);
			    this.farol.apply();
                this.lamp.display();
            this.scene.popMatrix();

            //Left lamp
            this.scene.pushMatrix();
                this.scene.scale(0.5,0.5,0.5);
                this.scene.translate(-1, 1.5, 10);
                this.scene.rotate(-Math.PI / 3, 1, 0, 0);
				this.farol.apply();
                this.lamp.display();
            this.scene.popMatrix();

        this.scene.popMatrix();
    };

    advance(currTime)
    {
        if(this.lastUpdatedTime != -1)
        {
            var deltaT = ((currTime - this.lastUpdatedTime) / 1000); // Calculate delta time

            // Calculate distance travelled in the X and Z axis

            this.travelDistanceX += Math.cos(this.turnAngle) * this.velocity * deltaT;
            this.travelDistanceZ -= Math.sin(this.turnAngle) * this.velocity * deltaT;

            // Rotate wheels forward/backwards

            this.frontWheel.advance(this.velocity, currTime);
            this.frontWheel.turningAngle = 0;
            this.backWheel.advance(this.velocity, currTime);
        }

        this.lastUpdatedTime = currTime;
    };

    // Turns in correspondent direction

    turn(currTime, right)
    {
        // Only turns if vehicle is in motion

        if(this.velocity == 0)
            return;

        if(this.lastUpdatedTurningTime == -1)
            if(right)
                this.turnAngle -= 0.01;
            else
                this.turnAngle += 0.01;
        else
        {
            var deltaT = ((currTime - this.lastUpdatedTurningTime) / 1000); // Calculate delta time

            if(right) // If turning right
            {
                this.turnAngle -= 2 / Math.PI  * Math.pow(deltaT, 2) + deltaT;

                if(this.velocity > 0)
                    this.frontWheel.turningAngle = - Math.PI / 6;
                else
                    this.frontWheel.turningAngle = Math.PI / 6;
            }
            else //If turning left
            {
                this.turnAngle += 2 / Math.PI  * Math.pow(deltaT, 2) + deltaT;
                
                if(this.velocity > 0)
                    this.frontWheel.turningAngle = Math.PI / 6;
                else
                    this.frontWheel.turningAngle = - Math.PI / 6;
            }

        }

        this.lastUpdatedTurningTime = currTime;
    };

}

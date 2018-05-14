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
        this.support = new MyUnitCubeQuad(scene);
        this.mirror = new MyMirror(scene);
        this.wheel = new MyWheel(scene);
        this.light = new MyLamp(scene, 12, 2);
				this.lamp = new MyLamp(scene, 20, 20, 0.25);

        this.metal = new CGFappearance(scene);
        this.metal.loadTexture("../resources/images/darkMetal.jpg");
    };

    display()
    {
        //Chassis
        this.scene.pushMatrix();
            this.scene.translate(0,0,2);
            this.scene.scale(0.8,0.8,0.8);
            this.chassis.display();
        this.scene.popMatrix();

        //Turret
        this.scene.pushMatrix()
            this.scene.translate(-0.3, 1.35, 1.5);
            this.turret.display();
        this.scene.popMatrix();

        //Left Mirror
        this.scene.pushMatrix()
            this.scene.translate(1, 2.1, 3.5);
            this.mirror.display();
        this.scene.popMatrix();

        //Right Mirror
        this.scene.pushMatrix()
            this.scene.translate(-1, 2.1, 3.5);
            this.mirror.display();
        this.scene.popMatrix();

        //Right Mirror Support
        this.scene.pushMatrix()
            this.scene.translate(-1,1.1,3.5);
            this.scene.scale(0.2,0.05,0.05);
            this.scene.translate(0.5, 0.5, 0.5);
            this.metal.apply();
            this.support.display();
        this.scene.popMatrix();

        //Left Mirror Support
        this.scene.pushMatrix()
            this.scene.translate(0.8,1.1,3.5);
            this.scene.scale(0.2,0.05,0.05);
            this.scene.translate(0.5, 0.5, 0.5);
            this.metal.apply();
            this.support.display();
        this.scene.popMatrix();

        //Front Left Wheel
        this.scene.pushMatrix()
            this.scene.translate(0.8,0.25,3.5);
            this.wheel.display();
        this.scene.popMatrix();

        //Front Rigth Wheel
        this.scene.pushMatrix()
            this.scene.translate(-0.8,0.25,3.5);
            this.scene.rotate(- Math.PI, 0,1,0);
            this.wheel.display();
        this.scene.popMatrix();

        //Back Left Wheel
        this.scene.pushMatrix()
            this.scene.translate(0.8,0.25, 0.8);
            this.wheel.display();
        this.scene.popMatrix();

        //Back Rigth Wheel
        this.scene.pushMatrix()
            this.scene.translate(-0.8,0.25, 0.8);
            this.scene.rotate(- Math.PI, 0,1,0);
            this.wheel.display();
        this.scene.popMatrix();

        //Left Headlight
        this.scene.pushMatrix()
            this.scene.translate(5,5,5);
            //this.scene.rotate(- Math.PI / 2, 0,1,0);
            //this.light.display();
        this.scene.popMatrix();

				//Rigth lamp
				this.scene.pushMatrix();
					this.scene.translate(0.5, 1, 5, 1);
					this.scene.rotate(-Math.PI / 3, 1, 0, 0);
					this.lamp.display();
				this.scene.popMatrix();

				//Left lamp
				this.scene.pushMatrix();
					this.scene.translate(-0.5, 1, 5, 1);
					this.scene.rotate(-Math.PI / 3, 1, 0, 0);
					this.lamp.display();
				this.scene.popMatrix();

    };

}

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

        this.metal = new CGFappearance(scene);
        this.metal.loadTexture("../resources/images/darkMetal.jpg");
    };

    display()
    {
        //Chassis
        this.scene.pushMatrix();
            this.scene.scale(0.8,0.8,0.8);
            this.chassis.display();
        this.scene.popMatrix();

        //Turret
        this.scene.pushMatrix()
            this.scene.translate(-0.3, 1.35, -0.5);
            this.turret.display();  
        this.scene.popMatrix();

        //Left Mirror
        this.scene.pushMatrix()
            this.scene.translate(1, 2.1, 1.5);
            this.mirror.display();  
        this.scene.popMatrix();

        //Right Mirror
        this.scene.pushMatrix()
            this.scene.translate(-1, 2.1, 1.5);
            this.mirror.display();  
        this.scene.popMatrix();

        //Right Mirror Support
        this.scene.pushMatrix()
            this.scene.translate(-1,1.1,1.5);
            this.scene.scale(0.2,0.05,0.05);
            this.scene.translate(0.5, 0.5, 0.5);
            this.metal.apply();
            this.support.display();  
        this.scene.popMatrix();

        //Left Mirror Support
        this.scene.pushMatrix()
            this.scene.translate(0.8,1.1,1.5);
            this.scene.scale(0.2,0.05,0.05);
            this.scene.translate(0.5, 0.5, 0.5);
            this.metal.apply();
            this.support.display();  
        this.scene.popMatrix();

        //Front Left Wheel
        this.scene.pushMatrix()
            this.scene.translate(0.77,0,2);
            this.scene.rotate(Math.PI / 2, 0,1,0);
            this.wheel.display();  
        this.scene.popMatrix();

        //Front Rigth Wheel
        this.scene.pushMatrix()
            this.scene.translate(-1.2,0,2);
            this.scene.rotate(Math.PI / 2, 0,1,0);
            this.wheel.display();  
        this.scene.popMatrix();

        //Back Left Wheel
        this.scene.pushMatrix()
            this.scene.translate(0.77,0,-1);
            this.scene.rotate(Math.PI / 2, 0,1,0);
            this.wheel.display();  
        this.scene.popMatrix();

        //Back Rigth Wheel
        this.scene.pushMatrix()
            this.scene.translate(-1.2,0,-1);
            this.scene.rotate(Math.PI / 2, 0,1,0);
            this.wheel.display();  
        this.scene.popMatrix();
    };

}
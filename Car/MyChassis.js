/**
 * MyChassis
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyChassis extends CGFobject
{
	constructor(scene)
	{
        super(scene);

        this.floor = new MyUnitCubeQuad(scene);
        this.leftDoor =  new MyUnitCubeQuad(scene);
        this.rightDoor = new MyUnitCubeQuad(scene);
        this.side =  new MyUnitCubeQuad(scene);
        this.front =  new MyUnitCubeQuad(scene);
        this.back =  new MyUnitCubeQuad(scene);
        this.trap = new MyPrism (scene, 3, 3);
        this.tampo = new MyDisk(scene, 3);
        this.roof =  new MyUnitCubeQuad(scene);

        
        this.camo = new CGFappearance(scene);
        this.camo.loadTexture("../resources/images/Camo.png");

        this.underCarriage = new CGFappearance(scene);
        this.underCarriage.loadTexture("../resources/images/darkMetal.jpg");

    };

    display()
    {
        //Floor
        this.scene.pushMatrix();
            this.scene.scale(2,0.1,5,1);
            this.underCarriage.apply();
            this.floor.display();
        this.scene.popMatrix();

        //Sides

        //front left
        this.scene.pushMatrix();
            this.scene.translate(0.85, 0, 0.845, 1);
            this.scene.scale(0.15, 1.68, 1.66, 1);
            this.scene.translate(0.5,0.5,0.5,1);
            this.camo.apply();
            this.side.display();
        this.scene.popMatrix();

        //front rigth
        this.scene.pushMatrix();
            this.scene.translate(-1, 0, 0.845, 1);
            this.scene.scale(0.15, 1.68, 1.66, 1);
            this.scene.translate(0.5,0.5,0.5,1);
            this.side.display();
        this.scene.popMatrix();

        //back left
        this.scene.pushMatrix();
            this.scene.translate(0.85, 0, -2.5, 1);
            this.scene.scale(0.15, 1.68, 1.66, 1);
            this.scene.translate(0.5,0.5,0.5,1);
            this.side.display();
        this.scene.popMatrix();

        //back right
        this.scene.pushMatrix();
            this.scene.translate(-1, 0, -2.5, 1);
            this.scene.scale(0.15, 1.68, 1.66, 1);
            this.scene.translate(0.5,0.5,0.5,1);
            this.side.display();
        this.scene.popMatrix();

        //mid right
        this.scene.pushMatrix();
            this.scene.translate(-1, 0, -0.84, 1);
            this.scene.scale(0.15, 1.3, 1.7, 1);
            this.scene.translate(0.5,0.5,0.5,1);
            this.side.display();
        this.scene.popMatrix();

        //mid left
        this.scene.pushMatrix();
            this.scene.translate(0.85, 0, -0.84, 1);
            this.scene.scale(0.15, 1.3, 1.7, 1);
            this.scene.translate(0.5,0.5,0.5,1);
            this.side.display();
        this.scene.popMatrix();

        //Trapezio
        this.scene.pushMatrix();
            this.scene.translate(-1, 0.81, 3, 1);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/2, 0,1,0);
            this.trap.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-1, 0.81, 3, 1);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/2, 0,1,0);
            this.scene.rotate(Math.PI, 0,0,1);
            this.tampo.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1, 0.81, 3, 1);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/2, 0,1,0);
            this.tampo.display();
        this.scene.popMatrix();

        //Back
        this.scene.pushMatrix();
            this.scene.scale(2, 1.68, 0.1, 1);
            this.scene.translate(0, 0.5,-24.5, 1);
            this.back.display();
        this.scene.popMatrix();

        //Roof
        this.scene.pushMatrix()
            this.scene.translate(-1, 1.58, -2.5, 1);
            this.scene.scale(2, 0.1, 5, 1);
            this.scene.translate(0.5,0.5,0.5, 1);
            this.roof.display();
        this.scene.popMatrix();
    };

}

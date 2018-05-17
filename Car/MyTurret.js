/**
 * MyTurret
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTurret extends CGFobject
{
	constructor(scene)
	{
        super(scene);

        this.base = new MyUnitCubeQuad(scene);
        this.barrel = new MyCylinder(scene, 12, 6);
        this.side = new MyUnitCubeQuad(scene);

        this.metal = new CGFappearance(scene);
        this.metal.loadTexture("../resources/images/metal.png");

        this.camo = new CGFappearance(scene);
        this.camo.loadTexture("../resources/images/Camo.png");

        this.Darkmetal = new CGFappearance(scene);
        this.Darkmetal.loadTexture("../resources/images/darkRustedMetal.png");
    };

    display()
    {
        //main base
        this.scene.pushMatrix();
            this.scene.scale(0.6, 0.3, 0.6);
            this.scene.translate(0.5,0.5,0.5);
            this.Darkmetal.apply();
            this.base.display();
        this.scene.popMatrix();

        //left side
        this.scene.pushMatrix();
            this.scene.translate(0.8,0,0);
            this.scene.scale(0.2, 0.3, 0.6);
            this.scene.translate(0.5,0.5,0.5);
            this.Darkmetal.apply();
            this.side.display();
        this.scene.popMatrix();

        //right side
        this.scene.pushMatrix();
            this.scene.translate(-0.4,0,0);
            this.scene.scale(0.2, 0.3, 0.6);
            this.scene.translate(0.5,0.5,0.5);
            this.Darkmetal.apply();
            this.side.display();
        this.scene.popMatrix();

        //left back side
        this.scene.pushMatrix();
            this.scene.translate(0.6,0,0);
            this.scene.scale(0.2, 0.3, 0.2);
            this.scene.translate(0.5,0.5,0.5);
            this.Darkmetal.apply();
            this.side.display();
        this.scene.popMatrix();

        //right back side
        this.scene.pushMatrix();
            this.scene.translate(-0.2,0,0);
            this.scene.scale(0.2, 0.3, 0.2);
            this.scene.translate(0.5,0.5,0.5);
            this.Darkmetal.apply();
            this.side.display();
        this.scene.popMatrix();

        //top left
        this.scene.pushMatrix();
            this.scene.translate(0.6,0.2,0.2);
            this.scene.scale(0.2, 0.1, 0.4);
            this.scene.translate(0.5,0.5,0.5);
            this.Darkmetal.apply();
            this.side.display();
        this.scene.popMatrix();

         //top right
         this.scene.pushMatrix();
             this.scene.translate(-0.2,0.2,0.2);
             this.scene.scale(0.2, 0.1, 0.4);
             this.scene.translate(0.5,0.5,0.5);
             this.Darkmetal.apply();
            this.side.display();
         this.scene.popMatrix();

        //barrel
        this.scene.pushMatrix();
            this.scene.translate(0.27,0.1,0.25,1);
            this.scene.scale(0.1, 0.1, 0.6);
            this.scene.translate(0.5,0.5,0.5);
            this.metal.apply();
            this.barrel.display();
        this.scene.popMatrix();
    };

}

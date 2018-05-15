/**
 * MyTerrain
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyTerrain extends CGFobject
{
	constructor(scene, nrDivs, altimetry)
	{
        super(scene);
				this.nrDivs = nrDivs;
				this.altimetry = altimetry;

        this.ground = new Plane(scene, this.nrDivs, this.altimetry);

        this.texAmb = new CGFappearance(scene);
        this.texAmb.loadTexture("../resources/images/ImageHandler.jpg");

    };

    display()
    {
        //ground
        this.scene.pushMatrix();
            this.scene.scale(20,20,20);
            this.scene.translate(0,-0.005,0);
            this.scene.rotate(-Math.PI/2, 1, 0, 0);
            this.texAmb.apply();
            this.ground.display();
        this.scene.popMatrix();

    };

}

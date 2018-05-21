/**
 * MyCrane
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyCrane extends CGFobject
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
            //this.scene.translate(0,-0.09,0);
            this.scene.scale(100,10,70);
            this.scene.rotate(-Math.PI/2, 1, 0, 0);
            this.texAmb.apply();
            this.ground.display();
        this.scene.popMatrix();

    };

}

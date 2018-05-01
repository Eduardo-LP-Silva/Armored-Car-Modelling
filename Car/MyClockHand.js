/**
 * MyClockHand
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyClockHand extends CGFobject
{
	constructor(scene)
	{
		super(scene);
		this.CQuad = new MyUnitCubeQuad(this.scene);
		this.pointerAppearence = new CGFappearance(this.scene);
		this.rot = 0;
        this.pointerAppearence.setAmbient(0.2,0.2,0.2, 1);
        this.pointerAppearence.setDiffuse(0.6,0.6,0.6, 1);
        this.pointerAppearence.setSpecular(0.1,0.1,0.1,1);
        this.pointerAppearence.setShininess(30);
        this.pointerAppearence.loadTexture("../resources/images/black.png");
	};

	display()
	{
		this.scene.pushMatrix();
			//this.scene.rotate(this.rot,0 ,0 ,1);
			this.scene.translate(0, 0.5, 0);
			this.scene.scale(0.04,1,0.04);
			this.pointerAppearence.apply();
			this.CQuad.display();
		this.scene.popMatrix();
	}

	setAngle(angle)
	{
			this.rot = -(angle * Math.PI) / 180;
	}

};

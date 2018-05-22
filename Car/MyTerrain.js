class MyTerrain extends CGFobject
{
	constructor(scene, nrDivs, altimetry)
	{
        super(scene);
		this.nrDivs = nrDivs;
		this.altimetry = altimetry;

        this.ground = new Plane(scene, this.nrDivs, this.altimetry);

        this.texAmb = new CGFappearance(scene);
        //this.texAmb.setTextureWrap("REPEAT", "REPEAT");
        this.texAmb.loadTexture("../resources/images/ImageHandler.jpg");
        

    };

    display()
    {
        this.scene.pushMatrix();
            this.scene.scale(100,10,70);
            this.scene.rotate(-Math.PI/2, 1, 0, 0); // Rotate to be in the xz plane
            this.texAmb.apply();
            this.ground.display();
        this.scene.popMatrix();

    };
}

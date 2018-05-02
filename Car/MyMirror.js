/**
 * MyMirror
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyMirror extends CGFobject
{
	constructor(scene)
	{
        super(scene);
        this.support = new MyUnitCubeQuad(scene);
        this.mirror = new MyDisk(scene, 12);

        this.mirrorTex = new CGFappearance(scene);
        this.mirrorTex.loadTexture("../resources/images/mirror.png");
        this.mirrorTex.setAmbient(1,1,1,1);
        this.mirrorTex.setSpecular(1,1,1,1);

        this.supportTex = new CGFappearance(scene);
        this.supportTex.loadTexture("../resources/images/darkMetal.jpg");
    };

    display()
    {
        //Mirror
        this.scene.pushMatrix();
            this.scene.translate(-0.03,-0.55,-0.055);
            this.scene.scale(0.1,0.1,0.1);
            this.scene.translate(0.5,0.5,0.5);
            this.mirrorTex.apply();
            this.mirror.display();
        this.scene.popMatrix();

        //Vertical support
        this.scene.pushMatrix();
            this.scene.translate(0,-1,0);
            this.scene.scale(0.05,0.5,0.05);
            this.scene.translate(0.5,0.5,0.5);
            this.supportTex.apply();
            this.support.display();
        this.scene.popMatrix();
    };

}

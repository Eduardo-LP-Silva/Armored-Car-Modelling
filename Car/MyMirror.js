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
    };

    display()
    {
        //Mirror
        this.scene.pushMatrix();
            this.scene.translate(-0.03,-0.55,-0.055);
            this.scene.scale(0.1,0.1,0.1);
            this.scene.translate(0.5,0.5,0.5);
            this.mirror.display();
        this.scene.popMatrix();

        //Vertical support
        this.scene.pushMatrix();
            this.scene.translate(0,-1,0);
            this.scene.scale(0.05,0.5,0.05);
            this.scene.translate(0.5,0.5,0.5);
            this.support.display();
        this.scene.popMatrix();
    };

}

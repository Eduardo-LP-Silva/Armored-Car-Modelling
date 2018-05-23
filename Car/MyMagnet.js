class MyMagnet extends CGFobject
{
	constructor(scene)
	{
		super(scene);

		this.tampo = new MyDisk(scene, 12);
        this.manga = new MyUnitCubeQuad(scene);
        this.cyl = new MyCylinder(scene, 12, 3);

   		this.texCrane = new CGFappearance(scene);
		this.texCrane.loadTexture("../resources/images/darkRustedMetal.png");
    };

    display()
    {
        this.scene.pushMatrix();

            this.scene.translate(0, -4, 0);
        
            //---------------Fio---------------------

            this.scene.pushMatrix();
                //this.scene.translate(-5, 6,0);
                //this.scene.translate(-5, 6,0);
                //this.scene.translate(-6,2.8,12);
                this.scene.scale(0.1, 2, 0.1);
                this.scene.rotate(-Math.PI/2, 1, 0, 0);
                this.texCrane.apply();
                this.cyl.display();
            this.scene.popMatrix();

            //--------------Iman------------------------

			//base
			this.scene.pushMatrix();
                //this.scene.translate(-5,5.6,0);	
                //this.scene.translate(-6,2.4,12);
                this.scene.scale(1, 0.2, 1);
                this.scene.rotate(-Math.PI/2, 1, 0, 0);
                this.texCrane.apply();
                this.cyl.display();
            this.scene.popMatrix();

            //tampos
            this.scene.pushMatrix();
                //this.scene.translate(-5,5.6,0);
                //this.scene.translate(-6,2.4,12);
                this.scene.scale(1, 0.2, 1);
                this.scene.rotate(-Math.PI/2, 1, 0, 0);
                this.texCrane.apply();
                this.tampo.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
                this.scene.translate(0,0.4,0);
                //this.scene.translate(-6,2.8,12);
                this.scene.scale(1, 0.2, 1);
                this.scene.rotate(-Math.PI/2, 1, 0, 0);
                this.texCrane.apply();
                this.tampo.display();
            this.scene.popMatrix();

		this.scene.popMatrix();
    };
}
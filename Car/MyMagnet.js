class MyMagnet extends CGFobject
{
	constructor(scene)
	{
		super(scene);

		this.tampo = new MyDisk(scene, 12);
        this.manga = new MyUnitCubeQuad(scene);
        this.cyl = new MyCylinder(scene, 12, 3);
        this.car = new MyVehicle(scene);
        
        this.showCar = false;
        
        this.metal = new CGFappearance(scene);
        this.metal.loadTexture("../resources/images/metal.png");
        
        this.rope = new CGFappearance(scene);
		this.rope.loadTexture("../resources/images/rope.png");
    };

    display()
    {
        this.scene.pushMatrix();

            this.scene.translate(0, -4, 0);
        
            //---------------Fio---------------------

            this.scene.pushMatrix();
                this.scene.scale(0.1, 2, 0.1);
                this.scene.rotate(-Math.PI/2, 1, 0, 0);
                this.rope.apply();
                this.cyl.display();
            this.scene.popMatrix();

            //--------------Iman------------------------

			//base
			this.scene.pushMatrix();
                this.scene.scale(1, 0.2, 1);
                this.scene.rotate(-Math.PI/2, 1, 0, 0);
                this.metal.apply();
                this.cyl.display();
            this.scene.popMatrix();

            //tampos
            this.scene.pushMatrix();
                this.scene.scale(1, 0.2, 1);
                this.scene.rotate(-Math.PI/2, 1, 0, 0);
                this.metal.apply();
                this.tampo.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
                this.scene.translate(0,0.4,0);
                this.scene.scale(1, 0.2, 1);
                this.scene.rotate(-Math.PI/2, 1, 0, 0);
                this.metal.apply();
                this.tampo.display();
            this.scene.popMatrix();

            if(this.showCar)
            {
                this.scene.pushMatrix();
                    this.scene.translate(13.5, -1.9, 3);
                    this.car.display();
                this.scene.popMatrix();
            }

		this.scene.popMatrix();
    };
}
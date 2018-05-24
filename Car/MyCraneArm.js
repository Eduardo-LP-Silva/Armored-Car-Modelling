class MyCraneArm extends CGFobject
{
	constructor(scene)
	{
		super(scene);

		this.tampo = new MyDisk(scene, 12);
        this.manga = new MyUnitCubeQuad(scene);
        this.cyl = new MyCylinder(scene, 12, 3);
        this.magnet = new MyMagnet(scene);

   		this.texCrane = new CGFappearance(scene);
        this.texCrane.loadTexture("../resources/images/darkRustedMetal.png");
        
        this.metal = new CGFappearance(scene);
		this.metal.loadTexture("../resources/images/metal.png");
		
		this.lastUpdatedElevationTime = -1;
        this.elevationAngle = 0;
        this.wireMovementY = 0;
        this.wireMovementX = -5;
    };

    display()
    {
		this.scene.pushMatrix();
            this.scene.translate(0,10.5,0);
            this.scene.rotate(this.elevationAngle, 0, 0, 1);
            this.scene.translate(0,-10.5,0);

			//-------------cilindro superior-----------------
			
			//base
			this.scene.pushMatrix();
				this.scene.translate(0,10.5, -0.5);
				this.scene.scale(0.7, 0.7, 0.5);
				this.metal.apply();
				this.cyl.display();
			this.scene.popMatrix();

			//tampos
			this.scene.pushMatrix();
				this.scene.translate(0,10.5,-0.5);
				this.scene.scale(0.7, 0.7, 0.5);
				this.metal.apply();
				this.tampo.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
				this.scene.translate(0,10.5,0.5);
				this.scene.scale(0.7, 0.7, 0.5);
				this.metal.apply();
				this.tampo.display();
			this.scene.popMatrix();
			
			//-------------manga menor-----------------

			this.scene.pushMatrix();
				this.scene.translate(-0.7,10.5,0);
				this.scene.translate(-2.2,-0.5,0);
				this.scene.scale(4.5, 0.9, 0.9);
				this.scene.translate(0,0.5,0);
				this.texCrane.apply();
				this.manga.display();
			this.scene.popMatrix();

        this.scene.popMatrix();
        
        this.scene.pushMatrix();
            this.scene.translate(5,0,0);
            this.scene.translate(this.wireMovementX,this.wireMovementY, 0);
            this.scene.translate(-5, 10.5,0);
            this.magnet.display();
        this.scene.popMatrix();
    };

    elevate(currTime, up)
	{
		if(this.lastUpdatedElevationTime != -1)
		{
			var deltaT = ((currTime - this.lastUpdatedElevationTime) / 1000); // Calculate delta time

			if(up)
            {
                this.elevationAngle -= 2 / Math.PI  * Math.pow(deltaT, 2) + deltaT;
            }
            else
            {
                this.elevationAngle += 2 / Math.PI  * Math.pow(deltaT, 2) + deltaT;
            }

            this.wireMovementX = -5 * Math.cos(this.elevationAngle);
            this.wireMovementY = -5 * Math.sin(this.elevationAngle);
		}

        this.lastUpdatedElevationTime = currTime;
	};
}
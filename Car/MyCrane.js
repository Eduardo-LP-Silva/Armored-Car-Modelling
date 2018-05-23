class MyCrane extends CGFobject
{
	constructor(scene)
	{
		super(scene);

		this.tampo = new MyDisk(scene, 12);
		this.cyl = new MyCylinder(scene, 12, 3);
		this.manga = new MyUnitCubeQuad(scene);

   		this.texCrane = new CGFappearance(scene);
		this.texCrane.loadTexture("../resources/images/darkRustedMetal.png");
		
		this.lastUpdatedTurningTime = -1;
		this.turnAngle = 0;
    };

    display()
    {
		this.scene.pushMatrix();

			this.scene.rotate(this.turnAngle, 0, 1, 0);

			//cilindro base

			//base
			this.scene.pushMatrix();
				//this.scene.translate(0,-0.09,12);
				this.scene.scale(1, 0.4, 1);
				this.scene.rotate(-Math.PI/2, 1, 0, 0);
				this.texCrane.apply();
				this.cyl.display();
			this.scene.popMatrix();

			//tampo
			this.scene.pushMatrix();
				this.scene.translate(0,0.8,0);
				//this.scene.translate(0,0.71,12);
				this.scene.scale(1, 0.4, 1);
				this.scene.rotate(-Math.PI/2, 1, 0, 0);
				this.texCrane.apply();
				this.tampo.display();
			this.scene.popMatrix();
			
			//manga maior
			this.scene.pushMatrix();
				this.scene.translate(0,5.301,0);
				//this.scene.translate(0,0.71,12);
				this.scene.scale(0.9, 9, 0.9);
				//this.scene.rotate(-Math.PI/2, 1, 0, 0);
				this.texCrane.apply();
				this.manga.display();
			this.scene.popMatrix();

			//cilindro superior
			
			//base
			this.scene.pushMatrix();
				this.scene.translate(0,10.5, -0.5);
				//this.scene.translate(0,10,11.5);
				this.scene.scale(0.7, 0.7, 0.5);
				this.texCrane.apply();
				this.cyl.display();
			this.scene.popMatrix();

			//tampos
			this.scene.pushMatrix();
				this.scene.translate(0,10.5,-0.5);
				//this.scene.translate(0,10,11.5);
				this.scene.scale(0.7, 0.7, 0.5);
				this.texCrane.apply();
				this.tampo.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
				this.scene.translate(0,10.5,0.5);
				//this.scene.translate(0,10,12.5);
				this.scene.scale(0.7, 0.7, 0.5);
				this.texCrane.apply();
				this.tampo.display();
			this.scene.popMatrix();
			
			//manga menor
			this.scene.pushMatrix();
				this.scene.translate(1.6,10,0);
				//this.scene.translate(0,10,12);
				//this.scene.rotate(-Math.PI/2, 0, 1, 0);
				//this.scene.rotate(Math.PI/4, 0, 0, 1);
				this.scene.translate(-4.5,0,0);
				this.scene.scale(4.5, 0.9, 0.9);
				this.scene.translate(0,0.5,0);
				this.texCrane.apply();
				this.manga.display();
			this.scene.popMatrix();

			//Fio
			this.scene.pushMatrix();
				this.scene.translate(-5,6,0);
				//this.scene.translate(-6,2.8,12);
				this.scene.scale(0.1, 2, 0.1);
				this.scene.rotate(-Math.PI/2, 1, 0, 0);
				this.texCrane.apply();
				this.cyl.display();
			this.scene.popMatrix();

			//Iman

			//base
			this.scene.pushMatrix();
				this.scene.translate(-5,5.6,0);	
				//this.scene.translate(-6,2.4,12);
				this.scene.scale(1, 0.2, 1);
				this.scene.rotate(-Math.PI/2, 1, 0, 0);
				this.texCrane.apply();
				this.cyl.display();
			this.scene.popMatrix();

			//tampos
			this.scene.pushMatrix();
				this.scene.translate(-5,5.6,0);
				//this.scene.translate(-6,2.4,12);
				this.scene.scale(1, 0.2, 1);
				this.scene.rotate(-Math.PI/2, 1, 0, 0);
				this.texCrane.apply();
				this.tampo.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
				this.scene.translate(-5,6,0);
				//this.scene.translate(-6,2.8,12);
				this.scene.scale(1, 0.2, 1);
				this.scene.rotate(-Math.PI/2, 1, 0, 0);
				this.texCrane.apply();
				this.tampo.display();
			this.scene.popMatrix();

		this.scene.popMatrix();
	};

	turn(currTime, right)
	{
		if(this.lastUpdatedTurningTime != -1)
		{
			var deltaT = ((currTime - this.lastUpdatedTurningTime) / 1000); // Calculate delta time

            if(right) // If turning right
            {
                this.turnAngle -= 2 / Math.PI  * Math.pow(deltaT, 2) + deltaT;
            }
            else //If turning left
            {
                this.turnAngle += 2 / Math.PI  * Math.pow(deltaT, 2) + deltaT;
            }
		}

		this.lastUpdatedTurningTime = currTime;
	}
}

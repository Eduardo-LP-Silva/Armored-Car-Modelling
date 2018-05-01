/**
 * MyClock
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyClock extends CGFobject
{
	constructor(scene)
	{
        super(scene);

        this.cyl = new MyCylinder(this.scene, 12, 2);
        this.disk = new MyDisk(this.scene, 12);
        this.MHand = new MyClockHand(this.scene);
        this.HHand = new MyClockHand(this.scene);
        this.SHand = new MyClockHand(this.scene);

		this.lastUpdateTime = -1;

        this.clockAppearence = new CGFappearance(this.scene);
		this.clockAppearence.setAmbient(0.5,0.5,0.5,1);
		this.clockAppearence.setDiffuse(0.3,0.3,0.3,1);
		this.clockAppearence.setSpecular(0.7,0.7,0.7,1);
        this.clockAppearence.setShininess(30);
        this.clockAppearence.loadTexture("../resources/images/clock.png");


		this.hours = 3;
		this.minutes = 30;
		this.seconds = 45;

		this.hours += this.minutes/60 + this.seconds/60/60;

    };

	update (currTime)
		{
			var Seg=0, Min=0, Hrs=0, variation, i=0;
			
			if (this.lastUpdateTime == -1)
				this.lastUpdateTime = currTime;

			variation = (currTime - this.lastUpdateTime)/1000.0; //ms to S
			
			this.hours += variation/60/60;

			this.minutes = (this.hours*60)%60;

			this.seconds = (this.hours*60*60)%60;

			this.lastUpdateTime = currTime;
			
			//console.log("hours : " + this.hours);
			//console.log("minutes : " + this.minutes);
			//console.log("seconds : " + this.seconds);
			//console.log("variation : " + variation);

			this.HHand.setAngle(this.hours * 360/12);
			this.MHand.setAngle(this.minutes * 360/60);
			this.SHand.setAngle(this.seconds * 360/60);
		}

    display()
    {
			this.scene.pushMatrix();
				this.scene.scale(0.7,0.7,0.3);
				this.cyl.display();
				this.disk.display();
				this.scene.translate(0 ,0, 1);
				this.clockAppearence.apply();
				this.disk.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
				this.scene.translate(0,0,0.32);
				this.scene.rotate(this.MHand.rot,0 ,0 ,1);
				this.scene.scale(1,0.5,1);
				this.MHand.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
				this.scene.translate(0,0,0.32);
				this.scene.rotate(this.HHand.rot,0 ,0 ,1);
				this.scene.scale(1,0.3,1);
				this.HHand.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
				this.scene.translate(0,0,0.32);
				this.scene.rotate(this.SHand.rot,0 ,0 ,1);
				this.scene.scale(1,0.6,1);
				this.SHand.display();
			this.scene.popMatrix();
    }

};

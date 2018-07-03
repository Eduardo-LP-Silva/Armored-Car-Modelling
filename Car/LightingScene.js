
class LightingScene extends CGFscene
{
	constructor()
	{
		super();
	};

	init(application)
	{
		super.init(application);

		this.initCameras();

		this.initLights();

		this.enableTextures(true);

		this.drawAxis = true;

		this.altimetry= [[ 2.0 , 6.0 , 4.0, 5.0, 10.0, 7.0, 2.3, 1.3 ],
		[ 2.0 , 3.0 , 0.0, 0.0, 0.0, 0.0, 0, 1.3 ],
		[ 4.0 , 6.0 , 0.0, 0.0, 0.0, 0.0, 0, 2.6 ],
		[ 2.6 , 4.0 , 0.0, 0.0, 0.0, 0.0, 0, 1.7 ],
		[ 5.2 , 8.0 , 0.0, 0.0, 0.0, 0.0, 0, 3.4 ],
		[ 3.5 , 5.3 , 0.0, 0.0, 0.0, 0.0, 0, 2.3 ],
		[ 7.0 , 10.6 , 0.0, 0.0, 0.0, 0.0, 0, 4.6 ],
		[ 4.7 , 7.1 , 0.0, 0.0, 0.0, 0.0, 0, 3.1 ],
		[ 2.0 , 0.0 , 0.0, 0.0, 0.0, 0.0, 0, 1.3 ]
	];

		this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
		this.gl.clearDepth(100.0);
		this.gl.enable(this.gl.DEPTH_TEST);
		this.gl.enable(this.gl.CULL_FACE);
		this.gl.depthFunc(this.gl.LEQUAL);

		this.materialDefault = new CGFappearance(this);
		this.materialDefault.setAmbient(0.7,0.7,0.7,1);
		this.materialDefault.setSpecular(0.5,0.5,0.5,1);
		this.materialDefault.setDiffuse(0.5,0.5,0.5,1);
		this.axis = new CGFaxis(this);

		this.car = new MyVehicle(this);
		this.ch = new MyTerrain(this, 8, this.altimetry);
		this.testWheel = new MyWheel(this);
		this.crane = new MyCrane(this);
		this.border = new MyUnitCubeQuad(this);

		this.warningLine = new CGFappearance(this);
		this.warningLine.setAmbient(0.1, 0.1, 0.1, 1);
		this.warningLine.setDiffuse(0.5, 0.5, 0.5, 1);
		this.warningLine.setSpecular(0, 0, 0, 1);
        this.warningLine.loadTexture("../resources/images/yellowLines.png")

		this.setUpdatePeriod(10);
	};

	initCameras()
	{
		this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
	};

	initLights()
	{
		this.setGlobalAmbientLight(0,0,0, 0);

		//---------------Ceiling Lights-----------------

		//Back light
		this.lights[0].setPosition(0, 20, -25, 1);
		this.lights[0].setVisible(true); // show marker on light position (different from enabled)
		this.lights[0].setAmbient(0.1, 0.1, 0.1, 1);
		this.lights[0].setDiffuse(0.8, 0.8, 0.8, 1.0);
		this.lights[0].setSpecular(0.7,0.7,0.7,1);
		this.lights[0].enable();

		//Center Ligth
		this.lights[1].setPosition(0, 20, 0, 1.0);
		this.lights[1].setVisible(true); // show marker on light position (different from enabled)
		this.lights[1].setAmbient(0.1, 0.1, 0.1, 1);
		this.lights[1].setDiffuse(0.8, 0.8, 0.8, 1.0);
		this.lights[1].setSpecular(0.7, 0.7, 0.7, 1);
		this.lights[1].enable();

		//Left Ligth
		this.lights[2].setPosition(-20, 20, 0, 1.0);
		this.lights[2].setVisible(true);
		this.lights[2].setAmbient(0.1, 0.1, 0.1, 1);
		this.lights[2].setDiffuse(0.8, 0.8, 0.8, 1);
		this.lights[2].setSpecular(0.7, 0.7, 0.7, 1);
		this.lights[2].enable();

		//Front Ligth
		this.lights[3].setPosition(0, 20, 20, 1);
		this.lights[3].setVisible(true);
		this.lights[3].setAmbient(0.1, 0.1, 0.1, 1);
		this.lights[3].setDiffuse(0.8, 0.8, 0.8, 1.0);
		this.lights[3].setSpecular(0.7, 0.7, 0.7,1);
		this.lights[3].enable();

		//Right Light
		this.lights[4].setPosition(20, 20, 0, 1);
		this.lights[4].setVisible(true);
		this.lights[4].setAmbient(0.1, 0.1, 0.1, 1);
		this.lights[4].setDiffuse(0.8, 0.8, 0.8, 1.0);
		this.lights[4].setSpecular(0.7, 0.7, 0.7,1);
		this.lights[4].enable();
	};

	updateLights()
	{
		for (var i = 0; i < this.lights.length; i++)
			this.lights[i].update();
	};

	update(currTime)
	{
		this.checkKeys(currTime);

		//console.log(this.car.travelDistanceZ);

		this.craneStateMachine(currTime)
	};

	checkCarBoundaries()
	{
		if(this.car.travelDistanceX < -13 && this.car.travelDistanceX > -14)
			if((Math.sin(this.car.turnAngle) >= 0
				&& this.car.travelDistanceZ >= -2 && this.car.travelDistanceZ <= -1)
				|| (Math.sin(this.car.turnAngle) < 0 &&  this.car.travelDistanceZ + 4 >= -2
				&& this.car.travelDistanceZ + 4 <= -1)) 
				{
					this.car.velocity = 0;
					this.car.block = true;

					return true;
				}
		else
			return false;

	}

	craneStateMachine(currTime)
	{
		switch(this.crane.state)
		{
			case "D-UP":

				if(!this.crane.smallerArm.magnet.showCar)
				{
					if(this.checkCarBoundaries())
						if(Math.abs(this.crane.turnAngle) < Math.PI)
							this.crane.turn(currTime, true);
						else
						{
							this.crane.lastUpdatedTurningTime = -1;
							this.crane.state = "R-UP";	
						}
				}
				else
				{
					if(this.crane.smallerArm.elevationAngle < Math.PI / 7)
						this.crane.smallerArm.elevate(currTime, false);
					else
					{
						this.crane.smallerArm.magnet.showCar = false;
						this.car = this.crane.smallerArm.magnet.car;
						this.car.magnetize = false;
						this.car.block = false;

						
						if(Math.sin(this.car.turnAngle) < 0)
						{
							this.car.turnAngle += Math.PI;
							this.car.travelDistanceX = 6.7;
							this.car.travelDistanceZ = -2;
						}
						else
						{
							this.car.turnAngle -= Math.PI;
							this.car.travelDistanceX = 6.7;
							this.car.travelDistanceZ = -5;
						}
						
						this.crane.state = "D-DOWN";
					}
				}
			
				break;

			case "R-UP":

				if(!this.crane.smallerArm.magnet.showCar)
				{
					if(Math.abs(this.crane.smallerArm.elevationAngle) < Math.PI / 7)
						this.crane.smallerArm.elevate(currTime, false);
					else
						this.crane.state = "R-DOWN";
				}
				else
				{
					if(this.crane.turnAngle <= 0)
						this.crane.turn(currTime, false);
					else
					{
						this.crane.lastUpdatedTurningTime = -1;
						this.crane.state = "D-UP";
					}
						
				}
					
				break;

			case "R-DOWN":

				this.crane.smallerArm.magnet.car = this.car;
				this.car.magnetize = true;
				this.crane.smallerArm.magnet.showCar = true;

				if(this.crane.smallerArm.elevationAngle > 0)
					this.crane.smallerArm.elevate(currTime, true);
				else
				{
					this.crane.smallerArm.lastUpdatedElevationTime = -1;
					this.crane.state = "R-UP";
				}

				break;
					
			case "D-DOWN":

				if(this.crane.smallerArm.elevationAngle > 0)
					this.crane.smallerArm.elevate(currTime, true);
				else
				{
					this.crane.smallerArm.lastUpdatedElevationTime = -1;
					this.crane.state = "D-UP";
				}
				
				break;
			
			default:
				break;
		}

		//console.log(this.crane.state);
	}

	display()
	{
		// ---- BEGIN Background, camera and axis setup

		// Clear image and depth buffer everytime we update the scene
		this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
		this.gl.clearColor(0.0, 0.5, 1, 1.0);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

		// Initialize Model-View matrix as identity (no transformation)
		this.updateProjectionMatrix();
		this.loadIdentity();

		// Apply transformations corresponding to the camera position relative to the origin
		this.applyViewMatrix();

		// Update all lights used
		this.updateLights();

		// Draw axis
		if(this.drawAxis)
			this.axis.display();

		this.materialDefault.apply();

		// ---- END Background, camera and axis setup

		// ---- BEGIN Scene drawing section

		if(!this.car.magnetize)
		{
			this.pushMatrix();
				this.translate(3.5,0, 3.5);
				this.car.display();
			this.popMatrix();
		}
		

		this.ch.display();

		// Left Border

		this.pushMatrix();
			this.translate(-12, 0, -1);
			this.scale(0.5, 0.5, 6.5);
			this.translate(0, 0.5, 0);
			this.warningLine.apply();
			this.border.display();
		this.popMatrix();


		// Right Border

		this.pushMatrix();
			this.translate(-8, 0, -1);
			this.scale(0.5, 0.5, 6.5);
			this.translate(0, 0.5, 0);
			this.warningLine.apply();
			this.border.display();
		this.popMatrix();

		// Front Border

		this.pushMatrix();
			this.translate(-10, 0, -4);
			this.rotate(Math.PI / 2, 0, 1, 0);
			this.scale(0.5, 0.5, 4);
			this.translate(0, 0.5, 0);
			this.warningLine.apply();
			this.border.display();
		this.popMatrix();

		this.crane.display();
		// ---- END Scene drawing section
	};

	checkKeys(currTime)
	{
		
		if(this.car.block)
			return;

		if (this.gui.isKeyPressed("KeyW"))
		{
			if(this.car.lastUpdatedTime == -1)
				this.car.lastUpdatedTime = currTime;

			this.car.velocity += ((currTime - this.car.lastUpdatedTime) / 1000) * this.car.acceleration;

			this.car.advance(currTime);
		}
		else
			if (this.gui.isKeyPressed("KeyS"))
			{
				if(this.car.lastUpdatedTime == -1)
					this.car.lastUpdatedTime = currTime;

				this.car.velocity -= ((currTime - this.car.lastUpdatedTime) / 1000) * this.car.acceleration;

				this.car.advance(currTime);
			}
			else
				if(this.gui.isKeyPressed("KeyP"))
				{
					this.car.velocity = 0;
				}
				else
				{
					this.car.advance(currTime);
				}

			
		if(this.gui.isKeyPressed("KeyA"))
		{
			this.car.turn(currTime, false);
		}
		else
			if(this.gui.isKeyPressed("KeyD"))
			{
				this.car.turn(currTime, true);
			}
			else
			{
				this.car.lastUpdatedTurningTime = -1;
			}
				

		/*
		if(this.gui.isKeyPressed("KeyL"))
		{
			this.crane.turn(currTime, true);
		}
		else
			if(this.gui.isKeyPressed("KeyJ"))
			{
				this.crane.turn(currTime, false);
			}
			else
				this.crane.lastUpdatedTurningTime = -1;

		if(this.gui.isKeyPressed("KeyI"))
		{
			this.crane.smallerArm.elevate(currTime, true);
		}
		else
			if(this.gui.isKeyPressed("KeyK"))
			{
				this.crane.smallerArm.elevate(currTime, false);
			}
			else
				this.crane.smallerArm.lastUpdatedElevationTime = -1; */

	};
};

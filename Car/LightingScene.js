
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

		this.speed=3;
		this.drawAxis = true;

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
		this.ch = new MyTerrain(this);
		this.testWheel = new MyWheel(this);

		// this.try = new MyLamp(this);
		// this.tryN = new MyLamps(this);

		this.setUpdatePeriod(100);
	};

	initCameras()
	{
		this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
	};

	initLights()
	{
		this.setGlobalAmbientLight(0,0,0, 0);

		// Positions for four lights

		//Back light
		this.lights[0].setPosition(0, 6, -5, 1);
		this.lights[0].setVisible(true); // show marker on light position (different from enabled)
		this.lights[0].setAmbient(0, 0, 0, 1);
		this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[0].setSpecular(1,1,1,1);
		this.lights[0].enable();

		//Center Ligth
		this.lights[1].setPosition(0, 6.0, 0, 1.0);
		this.lights[1].setVisible(true); // show marker on light position (different from enabled)
		this.lights[1].setAmbient(0, 0, 0, 1);
		this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[1].setSpecular(1,1,1,1);
		this.lights[1].enable();

		//Left Ligth
		this.lights[2].setPosition(5, 6.0, 0, 1.0);
		this.lights[2].setVisible(true);
		this.lights[2].setAmbient(0, 0, 0, 1);
		this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[2].setSpecular(1,1,1,1);
		// this.lights[2].setConstantAttenuation(0);
		// this.lights[2].setLinearAttenuation(1);
		// this.lights[2].setQuadraticAttenuation(0);
		this.lights[2].enable();

		//Front Ligth
		this.lights[3].setPosition(0,6,5,1);
		this.lights[3].setVisible(true);
		this.lights[3].setAmbient(0, 0, 0, 1);
		this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[3].setSpecular(1,1,1,1);
		// this.lights[3].setConstantAttenuation(0);
		// this.lights[3].setLinearAttenuation(0);
		// this.lights[3].setQuadraticAttenuation(1);
		this.lights[3].enable();

		//Right Light
		this.lights[4].setPosition(-5, 6, 0, 1);
		this.lights[4].setVisible(true);
		this.lights[4].setAmbient(0, 0, 0, 1);
		this.lights[4].setDiffuse(1.0, 1.0, 1.0, 1.0);
		this.lights[4].setSpecular(1,1,1,1);
		this.lights[4].enable();
	};

	updateLights()
	{
		for (var i = 0; i < this.lights.length; i++)
			this.lights[i].update();
	}

	update(currTime)
	{
		this.checkKeys(currTime);
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

		this.pushMatrix();
			//this.translate(0,0,5);
			this.car.display();
		this.popMatrix();

		//this.testWheel.display();

		this.ch.display();

		// this.scene.pushMatrix();
		// this.scene.translate(1, 0.81, 4, 1);
		//this.try.display();
		// this.scene.popMatrix();
		//
		// this.scene.pushMatrix();
		// this.scene.translate(5, 0.81, 4, 1);
		//this.tryN.display();
		//this.scene.popMatrix();


		// ---- END Scene drawing section
	};

	doSomething()
	{
		console.log("Doing something...");
	};

	checkKeys(currTime)
	{
		var text="Keys pressed: ";
		var keysPressed=false;

		if (this.gui.isKeyPressed("KeyW"))
		{
			text+=" W ";
			keysPressed=true;
			//this.car.wheel.advance(10, currTime);
			
			this.translate(0,0,2);
			this.car.display();
			
			//this.rotate(this.car.wheel.ang, 1, 0, 0);
		
		}

		if (this.gui.isKeyPressed("KeyS"))
		{
			text+=" S ";
			keysPressed=true;
		}

		if (keysPressed)
			console.log(text);
	};

};

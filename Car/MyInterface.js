 class MyInterface extends CGFinterface 
{
    constructor () 
    {
 		super();
 	};
	
    init(application) 
    {
		// call CGFinterface init
		super.init(application);

		// init GUI. For more information on the methods, check:
		//  http://workshop.chromeexperiments.com/examples/gui

		this.gui = new dat.GUI();

		// Add folder Lights

		var lights = this.gui.addFolder("Luzes");
		lights.open();
		
		// Add checkbox for each light

        for(var i = 0; i < this.scene.lights.length; i++)
            lights.add(this.scene.lights[i], 'enabled').name('Light ' + i);

		// Add checkbox for Axis

		this.gui.add(this.scene, 'drawAxis').name("Axis");

		// Add comboBox for active camouflage / Texture
		
		this.gui.add(this.scene.car.chassis, 'activeCamo', {Russian : 0, American : 1, German : 2});

		this.initKeys();

		return true;
	};

	initKeys() 
	{
		this.scene.gui=this;
		this.processKeyboard=function(){};
		this.activeKeys={};
	};

	processKeyDown(event) 
	{
		this.activeKeys[event.code]=true;
	};
		
	processKeyUp(event) 
	{
		this.activeKeys[event.code]=false;
	};
		
	isKeyPressed(keyCode) 
	{
		return this.activeKeys[keyCode] || false;
	};
};


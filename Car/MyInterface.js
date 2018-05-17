 
class MyInterface extends CGFinterface 
{
	/**
	 * MyInterface
	 * @constructor
	 */
     constructor () 
     {
 		super();
 	}
	
	/**
	 * init
	 * @param {CGFapplication} application
	 */
    init(application) 
    {
		// call CGFinterface init
		super.init(application);

		// init GUI. For more information on the methods, check:
		//  http://workshop.chromeexperiments.com/examples/gui

		this.gui = new dat.GUI();

		// add a group of controls (and open/expand by defult)

		var lights = this.gui.addFolder("Luzes");
		lights.open();

		// add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
		// e.g. this.option1=true; this.option2=false;
        
        for(var i = 0; i < this.scene.lights.length; i++)
            lights.add(this.scene.lights[i], 'enabled').name('Light ' + i);

		this.gui.add(this.scene, 'drawAxis').name("Axis");

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


class MyChassis extends CGFobject
{
	constructor(scene)
	{
        super(scene);

        this.floor = new MyUnitCubeQuad(scene);
        this.leftDoor =  new MyUnitCubeQuad(scene);
        this.rightDoor = new MyUnitCubeQuad(scene);
        this.side =  new MyUnitCubeQuad(scene);
        this.front =  new MyUnitCubeQuad(scene);
        this.back =  new MyUnitCubeQuad(scene);
        this.trap = new MyPrism (scene, 3, 3); //Trapezoid
        this.tampo = new MyDisk(scene, 3); //Trapezoid Sides
        this.roof =  new MyUnitCubeQuad(scene);
        this.camosList = new Array(3); //List of available camoflages
        this.activeCamo = 0; //Current Active Camoflage

        //Initializing camos list
        for(var i = 0; i < this.camosList.length; i++)
        {
                this.camosList[i] = new Array(3);

                for(var j = 0; j < this.camosList[i].length; j++)
                    this.camosList[i][j] = new CGFappearance(scene);
        }

        //Loading Assets
        this.camosList[0][0].loadTexture("../resources/images/Camo.png");
        this.camosList[0][1].loadTexture("../resources/images/camoWithLogo.png");
        this.camosList[0][2].loadTexture("../resources/images/camoWithNumber.png");
        this.camosList[1][0].loadTexture("../resources/images/desertCamo.png");
        this.camosList[1][1].loadTexture("../resources/images/desertCamoWithStar.png");
        this.camosList[1][2].loadTexture("../resources/images/desertCamoWithFlag.png");
        this.camosList[2][0].loadTexture("../resources/images/urbanCamo.png");
        this.camosList[2][1].loadTexture("../resources/images/urbanCamoWithCross.png");
        this.camosList[2][2].loadTexture("../resources/images/urbanCamoWithNumber.png");

        this.underCarriage = new CGFappearance(scene);
        this.underCarriage.loadTexture("../resources/images/darkMetal.jpg")
    };

    display()
    {
        //--------------------Floor----------------------

        this.scene.pushMatrix();
            this.scene.scale(2,0.01,5,1);
            this.underCarriage.apply();
            this.floor.display();
        this.scene.popMatrix();

        //----------------------Sides---------------------------------

        //front left
        this.scene.pushMatrix();
            this.scene.translate(0.85, 0, 0.845, 1);
            this.scene.scale(0.15, 1.58, 1.66, 1);
            this.scene.translate(0.5,0.5,0.5,1);
            this.camosList[this.activeCamo][0].apply();
            this.side.display();
        this.scene.popMatrix();

        //front rigth
        this.scene.pushMatrix();
            this.scene.translate(-1, 0, 0.845, 1);
            this.scene.scale(0.15, 1.58, 1.66, 1);
            this.scene.translate(0.5,0.5,0.5,1);
            this.camosList[this.activeCamo][0].apply();
            this.side.display();
        this.scene.popMatrix();

        //back left
        this.scene.pushMatrix();
            this.scene.translate(0.85, 0, -2.5, 1);
            this.scene.scale(0.15, 1.58, 1.66, 1);
            this.scene.translate(0.5,0.5,0.5,1);
            this.camosList[this.activeCamo][0].apply();
            this.side.display();
        this.scene.popMatrix();

        //back right
        this.scene.pushMatrix();
            this.scene.translate(-1, 0, -2.5, 1);
            this.scene.scale(0.15, 1.58, 1.66, 1);
            this.scene.translate(0.5,0.5,0.5,1);
            this.camosList[this.activeCamo][0].apply();
            this.side.display();
        this.scene.popMatrix();

        //mid right
        this.scene.pushMatrix();
            this.scene.translate(-1, 0, -0.84, 1);
            this.scene.scale(0.15, 1.3, 1.7, 1);
            this.scene.translate(0.5,0.5,0.5,1);
            this.camosList[this.activeCamo][2].apply();
            this.side.display();
        this.scene.popMatrix();

        //mid left
        this.scene.pushMatrix();
            this.scene.translate(0.85, 0, -0.84, 1);
            this.scene.scale(0.15, 1.3, 1.7, 1);
            this.scene.translate(0.5,0.5,0.5,1);
            this.camosList[this.activeCamo][2].apply();
            this.side.display();
        this.scene.popMatrix();

        //-------------------Trapezoid----------------------
        this.scene.pushMatrix();
            this.scene.translate(-1, 0.81, 3, 1);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/2, 0,1,0);
			this.camosList[this.activeCamo][0].apply();
            this.trap.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-1, 0.81, 3, 1);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(-Math.PI/2, 0,1,0);
            this.scene.rotate(Math.PI, 0,0,1);
            this.camosList[this.activeCamo][0].apply();
            this.tampo.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(1, 0.81, 3, 1);
            this.scene.rotate(Math.PI/3, 1,0,0);
            this.scene.rotate(Math.PI/2, 0,1,0);
            this.camosList[this.activeCamo][0].apply();
            this.tampo.display();
        this.scene.popMatrix();

        //--------------------------Back---------------------------
        this.scene.pushMatrix();
            this.scene.translate(0, 0, -2.25);
            this.scene.scale(1.7, 1.58, 0.01, 1);
            this.scene.translate(0, 0.5,-24.5, 1);
            this.scene.rotate(Math.PI, 0, 0, 1);
            this.camosList[this.activeCamo][1].apply();
            this.back.display();
        this.scene.popMatrix();

        //------------------Roof-------------------
        this.scene.pushMatrix()
            this.scene.translate(-1, 1.58, -2.5, 1);
            this.scene.scale(2, 0.1, 5, 1);
            this.scene.translate(0.5,0.5,0.5, 1);
            this.camosList[this.activeCamo][0].apply();
            this.roof.display();
        this.scene.popMatrix();
    };
}

/**
 * MyLamp
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyLamp extends CGFobject
{
	constructor(scene, slices, stacks)
	{
        super(scene);
        this.slices = slices; //longitude slices
        this.stacks = stacks; //Latitude stack

		    this.initBuffers();
	};

	initBuffers()
	{
   this.vertices = [];
   this.normals = [];
   this.indices = [];

   var ang_og = 2*Math.PI/this.slices;
    
   var decrease = 1;
   var i;

   for(i = 0; i < this.stacks; i++, decrease -= 0.1)
    {
      for(var ang = ang_og; ang <= 2*Math.PI; ang += ang_og)
      {
        this.vertices.push(Math.cos(ang)*decrease,Math.sin(ang)*decrease, i);
        this.normals.push(Math.cos(ang)*decrease, Math.sin(ang)*decrease, 0);
      }

    }

    for(i = 0; i <= this.stacks * this.slices -1 - this.slices; i++)
    {
        this.indices.push(i, i + this.slices, i + this.slices - 1);
        this.indices.push(i, i + this.slices - 1, i + this.slices);
        this.indices.push(i, i + 1, i + this.slices);
        this.indices.push(i, i + this.slices, i + 1);
    }
  
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
};

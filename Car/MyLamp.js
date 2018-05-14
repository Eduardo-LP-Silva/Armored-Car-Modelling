/**
 * MyLamp
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyLamp extends CGFobject
{
	constructor(scene, slices, stacks, radius)
	{
        super(scene);
        this.slices = slices; //longitude slices
        this.stacks = stacks; //Latitude stacks
        this.radius = radius;

		    this.initBuffers();
	};

	initBuffers()
	{
   this.vertices = [];
   this.normals = [];
   this.indices = [];

   this.theta = (Math.PI/2) / this.slices; //i
   this.alpha = 2*Math.PI / this.stacks; //j


   for(var j = 0; j <= this.stacks; j++)
   {
     for(var i = 0; i < this.slices; i++)
     {

        // x = r sinθ cosα
        // y = r cosθ
        // z = r sinθ sinα

        this.vertices.push( this.radius*Math.cos(this.alpha*j)*Math.sin(this.theta*i), this.radius*Math.sin(this.alpha*j)*Math.sin(this.theta*i), this.radius*Math.cos(this.theta*i) );
        this.normals.push( this.radius*Math.cos(this.alpha*j)*Math.sin(this.theta*i), this.radius*Math.sin(this.alpha*j)*Math.sin(this.theta*i), this.radius*Math.cos(this.theta*i) );
     }
   }

	 //Draw triangles
	   for(j = 0; j < this.stacks; j++)
		 {
	     for(i = 0; i < this.slices; i++)
			 {
	       //First
	       this.indices.push(this.slices*j+i);
	       this.indices.push(this.slices*j+i+1-(i < this.slices-1 ? 0 : this.slices));
	       this.indices.push(this.slices*(j+1)+i+1-(i < this.slices-1 ? 0 : this.slices));
	       //Second
	       this.indices.push(this.slices*(j+1)+i+1-(i < this.slices-1 ? 0 : this.slices));
	       this.indices.push(this.slices*(j+1)+i);
	       this.indices.push(this.slices*j+i);
	     }
	   }


 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
};

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
   this.texCoords = [];

   var ang = 2*Math.PI/this.slices;
    
   var decrease = 1;
   var i, j;

   for(i = 0; i < this.stacks; i++, decrease -= 1)
    {
      for(j = 0; j < this.slices; j++)
      {
        this.vertices.push(Math.cos(ang* j)*decrease,Math.sin(ang * j)*decrease, i);
        this.normals.push(Math.cos(ang * j)*decrease, Math.sin(ang * j)*decrease, 0);
        this.texCoords.push(this.minS + j * (this.maxS - this.minS) / this.slices,
          this.minT + i * (this.maxT - this.minT) / this.stacks);
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

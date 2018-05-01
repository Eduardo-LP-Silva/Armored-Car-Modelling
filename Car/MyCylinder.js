/**
 * MyCylinder
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyCylinder extends CGFobject
{
	constructor(scene, slices, stacks) 
	{
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
       

		this.initBuffers();
	};

	initBuffers() 
	{    
        var i, ang_og;

        this.vertices = [];
        this.indices = [];
        this.normals = [];
        
        var ang = 2*Math.PI / this.slices;
        var i, j;
        
        for(i = 0; i < this.stacks; i++)
        {
            for(j = 0; j < this.slices; j++)
            {
                
                this.vertices.push(Math.cos(j * ang),Math.sin(j * ang), i);
                this.normals.push(Math.cos(j * ang), Math.sin(j * ang), 0);

            }
        }
        
        for(i = 0; i <= this.stacks * this.slices -1 - this.slices; i++)
        {
            this.indices.push(i, i + this.slices, i + this.slices - 1);
            this.indices.push(i, i + this.slices - 1, i + this.slices);
            this.indices.push(i, i + 1, i + this.slices);
            this.indices.push(i, i + this.slices, i + 1);
        }

		this.primitiveType=this.scene.gl.TRIANGLES;
		
	
		this.initGLBuffers();
	};
};

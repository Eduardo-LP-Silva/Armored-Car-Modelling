/**
 * MyPrism
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

class MyPrism extends CGFobject
{
	constructor(scene, slices, stacks, minS = 0, maxS = 1, minT = 0, maxT = 1)
	{
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
				this.minS = minS;
				this.maxS = maxS;
				this.minT = minT;
				this.maxT = maxT;

		this.initBuffers();
	};

	initBuffers()
	{
        var i, ang_og;

        this.vertices = [];
        this.indices = [];
        this.normals = [];
				//this.texCoords = [];

        ang_og = 2*Math.PI / this.slices;

        for(i = 0; i < this.stacks; i++)
        {
            for(var ang = ang_og; ang <= 2*Math.PI; ang += ang_og)
            {
                this.vertices.push(Math.cos(ang),Math.sin(ang), i);
                this.normals.push(Math.cos(ang - ang_og/2), Math.sin(ang - ang_og / 2), 0);

                this.vertices.push(Math.cos(ang),Math.sin(ang), i);
                this.normals.push(Math.cos(ang + ang_og/2), Math.sin(ang +ang_og / 2), 0);
            }

						//this.texCoords.push(this.minS + i * (this.maxS - this.minS) / this.slices,
												//this.minT + i * (this.maxT - this.minT) / this.stacks);
        }

        for(i = 0; i <= this.stacks * this.slices*2 -2 - this.slices*2; i += 2)
        {
            this.indices.push(i, i + this.slices*2, i + this.slices*2 - 1);
            this.indices.push(i, i + this.slices*2 - 1, i + this.slices*2);
            this.indices.push(i + 1, i + 2, i + this.slices*2 + 1);
            this.indices.push(i + 1, i + this.slices*2 + 1, i + 2);
        }

		this.primitiveType=this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	};
};

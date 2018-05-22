
// Represents a plane with nrDivs divisions along both axis, with center at (0,0)

class Plane extends CGFobject
{
	constructor(scene, nrDivs, altimetry, minS = 0.0, maxS = 1.0, minT = 0.0, maxT = 1.0)
	{
		super(scene);

		this.minS = minS;
		this.maxS = maxS;
		this.minT = minT;
		this.maxT = maxT;
		this.altimetry = altimetry;

		// nrDivs = 1 if not provided
		nrDivs = typeof nrDivs !== 'undefined' ? nrDivs : 1;

		this.nrDivs = nrDivs;
		this.patchLength = 1.0 / nrDivs;

		this.initBuffers();
	};

	initBuffers()
	{
		/* example for nrDivs = 3 :
		(numbers represent index of point in vertices array)

				y
				^
				|
		0    1  |  2    3
				|
		4	 5	|  6    7
		--------|--------------> x
		8    9  |  10  11
				|
		12  13  |  14  15

		*/

		// Generate vertices and normals
		this.vertices = [];
		this.normals = [];

		this.texCoords = [];

		var yCoord = 0.5;
		var zCoord;

		for (var j = 0; j <= this.nrDivs; j++)
		{
			var xCoord = -0.5;

			for (var i = 0; i <= this.nrDivs; i++)
			{
				//var zCoord = this.altimetry[j][i] + this.patchLength;

				if(j != this.nrDivs && i != this.nrDivs)
				{
					this.vertices.push(xCoord, yCoord, this.altimetry[j][i] * this.patchLength);
					//zCoord = this.altimetry[j][i] * this.patchLength;
				}
				else
				{
					this.vertices.push(xCoord, yCoord, 0);
					//zCoord = 0;
				}


				// As this plane is being drawn on the xy plane, the normal to the plane will be along the positive z axis.
				// So all the vertices will have the same normal, (0, 0, 1).

				this.normals.push(0,0,1);
				//calculateNormals();

				this.texCoords.push(this.minS + i * (this.maxS - this.minS) / this.nrDivs,
										this.minT + j * (this.maxT - this.minT) / this.nrDivs);

				xCoord += this.patchLength;
			}

			yCoord -= this.patchLength;
		}

		// Generating indices
		/* for nrDivs = 3 output will be
			[
				 0,  4, 1,  5,  2,  6,  3,  7,
					7,  4,
				 4,  8, 5,  9,  6, 10,  7, 11,
				   11,  8,
				 8, 12, 9, 13, 10, 14, 11, 15,
			]
		Interpreting this index list as a TRIANGLE_STRIP will draw rows of the plane (with degenerate triangles in between. */

		this.indices = [];
		var ind=0;

		for (var j = 0; j < this.nrDivs; j++)
		{
			for (var i = 0; i <= this.nrDivs; i++)
			{
				this.indices.push(ind);
				this.indices.push(ind+this.nrDivs+1);

				ind++;
			}

			if (j+1 < this.nrDivs)
			{
				// Extra vertices to create degenerate triangles so that the strip can wrap on the next row
				// degenerate triangles will not generate fragments
				this.indices.push(ind+this.nrDivs);
				this.indices.push(ind);
			}
		}

		this.primitiveType = this.scene.gl.TRIANGLE_STRIP;

		this.initGLBuffers();
	};

	calculateNormals()
	{
		let count = 0;

		for(let i = 0; i < this.altimetry.length; i++)
		{

			for(let j = 0; j < this.altimetry[i].length; j++)
			{
				let N = this.findNormal(i, j);
				this.normals[count] = N[0];
				this.normals[++count] = N[1];
				this.normals[++count] = N[2];
				count++;
			}

		}

	}

	findNormal(x, y)
	{
		let hl = this.pHeigth(x-1, y);
		let hr = this.pHeigth(x+1, y);
		let hd = this.pHeigth(x, y-1);
		let hu = this.pHeigth(x, y+1);

		let N = [0, 0, 0];
		N[0] = hl - hr;
		N[1] = hd - hu;
		N[2] = 2.0;

		let length = Math.sqrt((N[0]*N[0]) + (N[1]*N[1]) + (N[2]*N[2]));
		N[0] = N[0] / length;
		N[1] = N[1] / length;
		N[2] = N[2] / length;

		return N;
	}

};

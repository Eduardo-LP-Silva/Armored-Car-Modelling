# Armored-Car-Modelling
WebGL model of an 
armored car controllable by the user, among other things.

## Features

### Controllable Armored Car Model

Fully modelled armored car with several geometric shapes such as: 

* Cubes (and its derivates) for the main structure; 
* Semi-spheres for the headlights; 
* Cylinders for the wheels and cannon barrel;
* Prysms for the frontal armour;
* Disks for the mirrors and parts of the wheel.

Each part is also fully textured.

![cgfimage-tp6-t4g04-2 4](https://user-images.githubusercontent.com/32617691/42229161-b38719c4-7edd-11e8-9050-8f775923c281.png)

The car can be controlled through the WASD keys (W - Forward, S - Backwards, A - Left, D - Right). This movement is also animated.

**Note:** The longer the W/S keys are pressed the faster the car will move in the respective direction. If the one of the keys is pressed
and then let go, the car will still move with the appropriate speed.

### GUI

A functional GUI which allows the user to:

* Switch on/off the lights;
* Turn on/off the central axis;
* Change the vehicle's textures.

![cgfimage-tp6-t4g04-5 2](https://user-images.githubusercontent.com/32617691/42229239-ec05eeec-7edd-11e8-9511-3ee33368761e.png)

### Uneven Terrain

The terrain surrouding the car is not entirely flat, having several hills around it.

![cgfimage-tp6-t4g04-6 3](https://user-images.githubusercontent.com/32617691/42231613-ec10d496-7ee3-11e8-81e9-4a254775d74f.png)

### Magnetic Crane

In the scene is also present a magnetic crane. If the user drives the car to the designated parking spot on the map (and the car is
within the boundaries), the crane will pick up the car and drop it on the other side.

![cgfimage-tp6-t4g04-7 3](https://user-images.githubusercontent.com/32617691/42231628-f6948fb6-7ee3-11e8-99dc-fa5151c92ca7.png)

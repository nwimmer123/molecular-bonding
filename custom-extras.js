var extras = require('./node_modules/aframe-extras');
AFRAME.registerComponent('velocity', extras.math.velocity); 
extras.physics.registerAll();                               
extras.registerAll(); 
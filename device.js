


var Device = require('zetta').Device; 


// a new empty class 
var MyLed = function MyLed(){ }; 

// inherts from the parent class Device 
MyLed.prototype =  new Device; 


MyLed.prototype.init = function( config) {
	config
		.type('led')
		.state('on')
		.name('myled-device')
	        .when( 'on', { allow: ['turn-off' ] } )	
		.when('off', { allow: ['turn-on'] } )
		.map ('turn-off', this.turnOff )
		.map( 'turn-on', this.turnOn);  

};


MyLed.prototype.turnOff = function(cb) {
	this.state = 'off'; 
	cb(); 

}; 

MyLed.prototype.turnOn = function (cb ) {
	this.state = 'on'; 
	cb(); 
}; 




// export the new class 
module.exports.MyLed = MyLed; 

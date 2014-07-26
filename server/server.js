drone = arDrone.createClient();
console.log(drone);

Meteor.startup(function () {
	console.log("Server started!");
	Meteor.methods({
		startDrone: function() {
			console.log("Taking off1");
			drone.takeoff();
		},
		landDrone: function() {
			console.log("Landing drone");
			drone.land();
		}
	});
});

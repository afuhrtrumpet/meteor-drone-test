Template.buttons.events({
	'click #takeoff': function () {
		Meteor.call('startDrone');
		console.log("takeoff called");
	},
	'click #land': function() {
		Meteor.call('landDrone');
		console.log("land called");
	}
});

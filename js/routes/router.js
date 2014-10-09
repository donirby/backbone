// Namespace our protoApp
var app = app || {};

app.Router = Backbone.Router.extend({

routes :{
	"": "noCopy",
	"GearA" : "heirloomRoseMessage",
	"MotorMount": "rainbowRoseMessage",
	"GearB" : "redRoseMessage"
},

noCopy: function() {
  $("#copy").html("");
},

heirloomRoseMessage: function() {
  $("#copy").html("Static Stress using a Linear Elastic Material Model for Gear A");
},

rainbowRoseMessage: function() {
  $("#copy").html("Static Stress using a Linear Elastic Material Model");
},

redRoseMessage: function() {
  $("#copy").html("Static Stress using a Linear Elastic Material Model for Gear B");
}

});



// Namespace our protoApp
var app = app || {};

app.allProtosView = Backbone.View.extend({

  tagName: "section",

  render: function() {
 	  this.collection.each(this.addProto, this);
 		return this;
  },

 addProto: function(proto) {
 		var protoView = new app.singleProtoView ({ model: proto });
 		this.$el.append(protoView.render().el);
 }

});
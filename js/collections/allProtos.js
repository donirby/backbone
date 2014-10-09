// Namespace our protoApp
var app = app || {};

// A group (array) of Proto models
app.ProtosCollection = Backbone.Collection.extend({

  // What type of models are in this collection?
  model: app.singleProto

});
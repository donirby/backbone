// Namespace our protoApp
var app = app || {};

app.singleProtoView = Backbone.View.extend({

  tagName: "article",
  className: "protoListItem",

  template: _.template( $("#stateProtoElement").html() ),

  render: function() {
    var protoTemplate = this.template(this.model.toJSON());
    this.$el.html(protoTemplate);
    return this;
  }

});
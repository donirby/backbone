// Namespace our protoApp
var app = app || {};

app.singleProtoView = Backbone.View.extend({

  tagName: "article",
  className: "protoListItem",

  template: _.template( $("#protoElement").html() ),

  render: function() {
    var protoTemplate = this.template(this.model.toJSON());
    this.$el.html(protoTemplate);
    return this;
  },

  events: {
  	'mouseover': 'addBgColor',
  	'mouseout': 'removeBgColor'
  },

  addBgColor: function() {
    this.$el.addClass("bgColorImage");
  },

  removeBgColor: function() {
    this.$el.removeClass("bgColorImage");
  }

});
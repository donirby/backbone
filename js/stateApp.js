var wash = new app.singleProto({
  state: "Washington",
  proto: "Rhododendron macrophyllum"
});

var ore = new app.singleProto({
  state: "Oregon",
  proto: "Oregon Grape"
});


var ProtoGroup = new app.ProtosCollection([
  wash, ore
]);

var ProtoGroupView = new app.allProtosView({ collection: ProtoGroup});

$("#stateProtos").html(ProtoGroupView.render().el);


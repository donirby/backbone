var redRoses = new app.singleProto({
  name: "Gear A",
  price: 40.1,
  color: "Steel",
  img: "algor/supplement/Images/Exercise ATITLE.PNG",
  link: "GearA"
});

var rainbowRoses = new app.singleProto({
  name: "Motor Mounts",
  price: 32.8,
  color: "Steel",
  link: "MotorMount"
});

var heirloomRoses = new app.singleProto({
  name: "Gear B",
  price: 27.4,
  img: "algor/supplement/Images/Exercise BTITLE.PNG",
  link: "GearB"
});

var ProtoGroup = new app.ProtosCollection([
  redRoses, rainbowRoses, heirloomRoses
]);

var ProtoGroupView = new app.allProtosView({ collection: ProtoGroup});

$("#allProtos").html(ProtoGroupView.render().el);

var protoRouter = new app.Router();

Backbone.history.start();


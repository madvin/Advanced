function carFactory(order) {
  let car = { model: "", engine: {}, carriage: {}, wheels: [] };

  car.model = order.model;

  if (order.power <= 90) {
    car.engine = {
      power: 90,
      volume: 1800,
    };
  } else if (order.power <= 120) {
    car.engine = {
      power: 120,
      volume: 2400,
    };
  } else {
    car.engine = {
      power: 200,
      volume: 3500,
    };
  }
  let wheelSize =
    order.wheelsize % 2 == 0 ? order.wheelsize - 1 : order.wheelsize;
  car.wheels = new Array(4).fill(wheelSize);

  car.carriage = {
    type: order.carriage,
    color: order.color,
  };
  return car;
}

console.log(carFactory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
}));

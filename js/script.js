// createVehicle factory function
const createVehicle = function (type, numWheels, color) {
    const vehicle = {};
    vehicle.type = type;
    vehicle.numWheels = numWheels;
    vehicle.color = color;
  
    return vehicle;
  };
  // new objects using the createVehicle factory function
const car = createVehicle("car", "4", "black");
const bike = createVehicle("bike", "2", "red");
const skateboard = createVehicle("skateboard", "4", "brown");
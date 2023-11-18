// createVehicle factory function
const createVehicle = function (type, numWheels, color) {
    const vehicle = {};
    vehicle.type = type;
    vehicle.numWheels = numWheels;
    vehicle.color = color;
  
    return vehicle;
  };
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

// myVehicles array
const myVehicles = [car, bike, skateboard];

// Loops over the array of objects, properties & values
for (let vehicle of myVehicles) {
  for (let key in vehicle) {
    console.log(key, vehicle[key]);
  }
}

// Objects that need repair plus a event click button event
bike.needsRepair = true;
skateboard.needsRepair = true;

button.addEventListener("click", function () {
  repairList.innerHTML = "";
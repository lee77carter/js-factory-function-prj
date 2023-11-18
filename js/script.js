// variables pointing to HTML classes
const button = document.querySelector("button");
const repairList = document.querySelector(".need-repair");

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
// property called needsRepair
bike.needsRepair = true;
skateboard.needsRepair = true;
// Click event, with function 
button.addEventListener("click", function () {
    repairList.innerHTML = "";  // clear text
    // New array that grabs the repair list
    const vehicleRepairList = myVehicles.filter(function (vehicle) {
        return vehicle.needsRepair === true;
    });
    // looping over objects to access array list
    for (let vehicle of vehicleRepairList) {
        let li = document.createElement("li");
        li.innerHTML = `My <span>${vehicle.type}</span> needs some 💜`;
        repairList.append(li);
    }
});
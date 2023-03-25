// Prototype Pattern in Node.js
var car = {
    type: "Fiat",
    model: "500",
    color: "white",
    drive: function() {
        console.log("Driving");
    }
};

// Create a new object using car as a prototype
var myCar = Object.create(car , {
    color: {
        value: "red"
    }

});

console.log(myCar.type); // Output: Fiat
console.log(myCar.color); // Output: red
console.log(myCar.model); // Output: 500
console.log(myCar.drive());// Output: Driving


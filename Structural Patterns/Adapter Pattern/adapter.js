// adapter Pattern in node.js
//
// The adapter pattern is a structural design pattern that allows objects with incompatible interfaces to collaborate.

const oldInterface = {
    greet: function(name){
        console.log(`Hello ${name}`);
    }
}

const newInterface = {
    welcome: function(firstName , lastName){
        console.log(`Welcome ${firstName} ${lastName}`);
    }
}

function adapter (firstName , lastName){
    const name = `${firstName} ${lastName}`;
    oldInterface.greet(name);
}

adapter('John' , 'Doe'); // Output: Hello John Doe


// In this example, we have an existing module oldModule with a
//  greet method that takes a single name parameter. We also have a 
//  new module newModule with a welcome method that takes two separate 
//  firstName and lastName parameters.

// We create an adapter function adapterFunction that takes the firstName
//  and lastName parameters and combines them into a single name paramete
//  r that can be passed to oldModule.greet(). This way, we can use the 
//  newModule.welcome() method with the incompatible oldModule.greet() 
//  method by adapting its interface using the adapter function.
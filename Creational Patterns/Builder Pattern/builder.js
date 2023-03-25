function Person(name , age , height , weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
}

function personBuilder (name ){
    this.name = name;

    // setter methods
    this.setAge = function(age){
        this.age = age;
        return this;
    }

    this.setHeight = function(height){
        this.height = height;
        return this;
    }

    this.setWeight = function(weight){
        this.weight = weight;
        return this;
    }


    // build method
    this.build = function(){
        return new Person(this.name , this.age , this.height , this.weight)
    }

}

// usage
var person = new personBuilder('John').setAge(25).setHeight(5.8).setWeight(65).build();
console.log(person);

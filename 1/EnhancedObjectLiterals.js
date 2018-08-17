//Shorthand for Initializing Properties:
//Shorthand for writing Methods:
function getLaptop(make, model, year) {
    return { 
        make, // make: make
        model, // model: model
        year, // year: year
        sayModel() { //sayModel : function() {
            return model;
        }
    }; 
}

getLaptop("Apple", "MacBook", "2015").sayModel();

//Computed Properties and Object Literals:
var name = "make";
const laptop = {
    [name]: "Apple"
};
console.log(laptop.make);//"Apple"
Advance:
var name = "make";
var i = 0;
    const laptop = {
    [name + ++i]: "Apple",
    [name + ++i]: "Dell",
    [name + ++i]: "HP"
};
console.log(laptop.make1);//"Apple"
console.log(laptop.make2);//"Dell"
console.log(laptop.make3);//"HP"
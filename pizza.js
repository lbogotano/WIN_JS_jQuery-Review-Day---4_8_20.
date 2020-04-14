var pizzaToppings = ['cheese','pepperoni','garlic','peppers'];

function pizza() {

    var addToppings = pizzaToppings.join(' and ');

    return('A delicious pizza that has git ' + addToppings);
}


console.log(pizza());

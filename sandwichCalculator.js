

function sandwichCalculator(slicesOfBread, slicesOfCheese){
    var sandwiches = slicesOfBread / 2;
    // if ( slicesOfBread < 2 && slicesOfCheese < 1) {
    //     console.log (" you need more ingredients for sandwich ")
    // } else if {
    //     (sandwiches === )
    // }

    if (slicesOfBread > 1  && slicesOfCheese < sandwiches ){
        sandwiches = slicesOfCheese;
        console.log(sandwiches);
        return sandwiches
    } else if((slicesOfCheese >= sandwiches) && (slicesOfBread > 1)) {
        console.log(sandwiches);
        return sandwiches;
    } else if((slicesOfCheese = 0) || (slicesOfBread < 2)){
        console.log("Oops we need more ingredients")
        return "You need to go back to the store and buy more ingredients";
    }

}
 sandwichCalculator(30,20);

// execution context consist of two phases
// memory creation phase and execution phase
// for the following code when it start the global execution context start

// first, memory creation phase
//    assign all global variables to undefined
//    for function declaration it is also created and assigned to its body
//    all that is attached to the global object you can see that in the sources tab
//    according to that var is not scoped

// second, execution phase
//    which goes line by line over the code and start assigning
//    the values and make calculation
//    when it reach the function call aGetSumFunc its making its own scope and also pass through
//    Memory Creation phase first so aSumInsideFunction is assigned to undefined
//    and attached to the local scope of the function

// ? when using let instead
//    "let" make hoisting also but the main differnce for global variables
//    it atach them to a scope called (script) you can't access
//    unless you used the variable after initalization
//    for scoped variables inside function it hoist it to undefined and you can log it
//    before initialize as it's inside the local scope not another scope

let aGlobalVariable1 = 100;
let aGlobalVariable2 = 50;

let aGetSumFunc = (aParamter1, aParamter2) => {
  let aSumInsideFunction = aParamter1 + aParamter2;
  return aSumInsideFunction;
};

let aSum1Global = aGetSumFunc(aGlobalVariable1, aGlobalVariable2);
let aSum2Global = aGetSumFunc(10, 5);

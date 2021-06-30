const receivesAFunction = (callback) => (callback())

const returnsANamedFunction = () => {return receivesAFunction}

const returnsAnAnonymousFunction = () => {
    return (function (){ })
}

// function call(){

// }


// exerciseRoutine(() => console.log("Stretch! Work that core!"));  

// exerciseRoutine(function () {
//     console.log("Stretch! Work that core!");
//   });

// function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
//   }
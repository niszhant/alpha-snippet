this.id = 'exports';

console.log(this);

const testObject = {
    func1: function () {
        console.log('func1', this);
    },

    func2: () => {
        console.log('func2', this);
    }
};

// when function1 is called, "this" will be associated 
// with its caller, which in this case will be testObject
testObject.func1();


testObject.func1.call(this);
testObject.func2();

/**
 * Output
{ id: 'exports' }
func1 { func1: [Function: func1], func2: [Function: func2] }
func1 { id: 'exports' }
func2 { id: 'exports' }
 */

// Destructuring

const { PI, E } = Math;
const location1 = 'x-coordinate'
const location2 = 'y-coordinate'

const circle = {
    radius: 5,
    color: 'red',
    [location1]: 2,
    [location2]: 7,
    PI
}

console.log(circle);

const calcArea = ({ radius, PI }) => {
    return (PI * radius * radius).toFixed(5);
}

console.log(`Area : ${calcArea(circle)}`);


const [first, ...restofitems] = [10, 20, 30, 40, 50];
console.log(first);
console.log(restofitems);


// to extract and create an object
const data = { tempValue1: 'abc', tempValue2: 123, fName: 'Nishant', lname: 'Kumar' };
const { tempValue1, tempValue2, ...person } = data;
console.log('Person : ', person);


// dynamic args
// arguments keyword holds all parameters passed to the function
function dynamicArgs() {
    console.log(arguments);
}

dynamicArgs(3, 5, 7, 10, 15);
// [Arguments] { '0': 3, '1': 5, '2': 7, '3': 10, '4': 15 }


// very important concept. prints the variables passed
// function(exports, module, require, __filename, __dirname) {
console.log(arguments);
//}


// global objects [just like window in browser. we can attach global values here, but IT IS >> NOT A GOOD PRACTISE <<]
console.dir(global, { depth: 0 });


// we can use util.promisify NodeJS methods based on async javascript using callbacks.

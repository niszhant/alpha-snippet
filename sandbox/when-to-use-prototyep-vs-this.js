/*
Methods Within Constructor vs Prototype in Javascript

At many instances when working with javascript objects, different pieces of code can give the same result on the surface yet underneath they could be different. One scenario is when adding methods to your Javascript 'classes'.

First of all lets agree on the fact that there are no classes in Javascript, and what you may refer to as a class is known as a constructor. That is because Javascript is not your classic class-based language but rather a prototype-based language.
It's not what it looks like

One way that may seem very natural is to set the methods right within the constructor, just like this.

function Person(name, family) {
    this.name = name;
    this.family = family;
    this.getFull = function () {
        return this.name + " " + this.family;
    };
}

Looks pretty natural for someone coming from a class based language like Java, and it will work as expected.

Yet the truth is, this approach might be wrong for many situations. In Javascript when you bind a method to the this keyword, you are providing that method to only that particular instance and it does not really have any relationship with an object instance of that constructor, pretty much like a static method. Keeping in mind that functions are first-class citizens in Javascript, we can deal with them just like objects, in this case we're only adding a property to an instance of a function object. Thats only part of the story, you must also know that any method attached via this will get re-declared for every new instance we create, which could affect the memory usage of the application negatively if we wish to create so many instances.
All that is gold does not glitter

That is why it is recommended in most cases to use a less obvious approach which is through our object's prototype. Prototype will enable us to easily define methods to all instances of the instances while saving memory. What's great is that the method will be applied to the prototype of the object, so it is only stored in the memory once, because objects coming from the same constructor point to one common prototype object. In addition to that, all instances of Person will have access to that method.

Recreating the above example, we end up with something like this

function Person(name, family) {
    this.name = name;
    this.family = family;
}

Person.prototype.getFull = function() {
    return this.name + " " + this.family;
};

Now having our object instances based on the second example, we will be able to save a significant amount of memory compared to the first approach as the number of instances of the constructor grows larger within the application. One should note though that modern Javascript engines such as V8 are smart enough for not to recreate instances of a method thanks to hidden classes.

Apart from low memory usage, the prototype approach is obviously faster in execution when creating new object instances since no time is spent on re-declaring any methods. However, there will be a slight decrease in the speed of invoking a method in comparison to the first approach. This is because when calling getFull the Javascript runtime will check for the method on the instance of the Person it won't be found there directly so it will then check the prototype of Person to find it. Yet definitely the overhead isn't that significant unless we have a deep prototype hierarchy.
There is no silver bullet

Despite the advantages of the prototype approach, it will always depend on the situation for which one to follow. For example the first approach can be useful if we needed access to local private variables from our method. In some situations we might find that we will be creating a small number of instances and accessing local object variables is part of the code design, then the first approach is not a bad choice.

The prototype approach would still be better when there is no need for the method to access local variables and when the creation of so many object instances is expected in which memory consumption becomes a concern.
Putting it all together

Back to our Person constructor again, consider a person has a private list of bank records which we do not wish to expose publicly yet we need to get the total balance from it. At the same time we want to have a method for getting the person's name, family and balance in a single string. To achieve that we'll apply a hybrid of both approaches, we need to have some inside access within the object yet make sure to minimize our memory consumption when we can do so(via prototype methods).
*/

function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;

    const transactions = [];

    this.addTransaction = function (transaction) {
        if (transaction.hasOwnProperty('type') && transaction.hasOwnProperty('amount')) {
            transactions.push(transaction);
        }
    };

    this.getBalance = function () {
        let balance = 0;
        transactions.forEach(transaction => {
            if (transaction.type === 'deposit') {
                balance += transaction.amount;
            }
            else {
                balance -= transaction.amount;
            }
        });
        return balance;
    };
}

Person.prototype.getFullName = function () {
    return (this.firstName + ' ' + this.lastName);
};

const me = new Person('Nishant', 'Kumar');
console.log(me.getBalance());
me.addTransaction({ type: 'deposit', amount: 500 });
me.addTransaction({ type: 'deposit', amount: 750 });
me.addTransaction({ type: 'withdraw', amount: 200 });
me.addTransaction({ type: 'deposit', amount: 1200 });
console.log(me.getFullName());
console.log(me.getBalance());

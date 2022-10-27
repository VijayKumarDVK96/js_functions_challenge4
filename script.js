const dogs = [
    {weight: 22, curFood: 250, owners: ['Alice', 'Bob']},
    {weight: 8, curFood: 200, owners: ['Matilda']},
    {weight: 13, curFood: 275, owners: ['Sarah', 'John']},
    {weight: 32, curFood: 340, owners: ['Micheal']},
];

dogs.forEach((val, index) => {
    val.recommendedFood = Math.round(val.weight ** 0.75 * 28);
    // console.log(recommendedFood);
});

console.log('1, New object with recommended food:');
console.log(dogs);

let ownersEatTooMuch = [];
let ownersEatTooLittle = [];

dogs.map(function(dog) {
    
    for(let i=0; i<dog.owners.length; i++) {
        if(dog.owners[i] == 'Sarah') {
            const sarahStatus = (dog.curFood > dog.recommendedFood) ? 'too much' : 'too little';
            console.log("2, Sarah dog eating "+sarahStatus);
        }

        if(dog.curFood > dog.recommendedFood)
        ownersEatTooMuch.push(dog.owners[i]);
        else
        ownersEatTooLittle.push(dog.owners[i]);
    }
});

console.log("3, Create an array dogs eat too Much");
console.log(ownersEatTooMuch, "dogs eat too Much");
console.log("Create an array dogs eat too Little");
console.log(ownersEatTooLittle, "dogs eat too Little");


let moreOwner = ownersEatTooMuch.join(",");
console.log(`4, ${moreOwner}'s dogs eat too much!`);

let lessOwner = ownersEatTooLittle.join(",");
console.log(`${lessOwner}'s dogs eat too less!`);


console.log('5, Exactly the amount of food');
dogs.map(function(dog) {
    for(let i=0; i<dog.owners.length; i++) {
        let foodStatus = (dog.curFood === dog.recommendedFood) ? true : false;
        console.log(dog.owners[i]+" : "+foodStatus);
    }
});

console.log('6, Okay the amount of food');
let okayFoodOwner = [];
dogs.map(function(dog) {
    let foodStatus;
    
    for(let i=0; i<dog.owners.length; i++) {
        let foodPercentage = Math.round((dog.recommendedFood * 0.1));

        if(foodPercentage > 10 && foodPercentage < 10) {
            foodStatus = true;
            okayFoodOwner.push(dog.owners[i]);
        } else {
            foodStatus = false;
        }
        
        console.log(dog.owners[i]+" : "+foodStatus);
    }
});

if(okayFoodOwner.length > 1)
console.log(`7, Okay the amount of food dog's owner - ${okayFoodOwner}`);
else
console.log(`7, Okay the amount of food dog's owner - No One`);


console.log(`8, Create a shallow copy of the 'dogs' array and sort it by recommended food`);
let newDogs = [];
dogs.map(function(dog) {
    for(let i=0; i<dog.owners.length; i++) {
        newDogs.push([dog.owners[i], dog.recommendedFood]);
    }
});

newDogs.sort(function(a, b) {
    return a[1] - b[1];
});


console.log(newDogs);
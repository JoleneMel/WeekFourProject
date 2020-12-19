//Template literals w/let variable firstname and lastname 
let createFullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(createFullName('MaryJane', 'Soto'));

//Template literals w/let variable d&d class and race 
let createCharacter = (classType, palyerRace) => `${classType} ${palyerRace}`;

console.log(createCharacter('Sorcerer', 'Half-Elf'));

//3a
//This will only aert once unlike like setInterval
setTimeout(() => { alert('Time is Up!'); }, 1000);

//3b 
let askAreWeThereYet = () => { alert('Are we there yet?');}

//function,time in miliseconds, so in this case it is every 10 seconds it will pop up repeatedly in this case every 10 seconds! 
setInterval(askAreWeThereYet, 10000);

//Orginial mrArr, since it is not const it can be redefined 
let myArr = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk'];

function processSplicedValue(myArr, index, callback) {
    let removed = myArr.splice(index, 1);
    callback(removed);
}
processSplicedValue(myArr, 4, console.log);

//myArr has previously been defined, but it was defined by let and therefore can be remade into a "new" array
myArr = ['Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard', 'Artificer'];

//2 = Rogue
processSplicedValue(myArr, 2, alert);

//5 = Artificer
//warpper function - passing in a function
processSplicedValue(myArr, 5, (value)=>{
    alert(value)
});

//1 = Ranger
//=>also called fat arrow
processSplicedValue(myArr, 1, (value)=>{
    console.log(value)
});

//Kitten=Paladin
processSplicedValue(myArr, 0, function myfunk(Kitten) {
    console.log(`${Kitten}`)
});

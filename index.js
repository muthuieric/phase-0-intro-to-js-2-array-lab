// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
function appendCat(name){
    let newCats = [...cats, name]
    return newCats;
}
function prependCat(name){
    let newCats = [name, ...cats]
    return newCats;  
}
function removeLastCat(){
     let newCats = cats.slice(0,-1);
    return newCats;
}
function removeFirstCat(){
    let newCats = cats.slice(1);
   return newCats;
}
//array1
const array1 = [15, 2, 7];
//array2
const array2 = [5];
/*
const array1 = ['ciao'];
const array2 = ['hola', 'hello'];
*/
//while the index of array 1 is smaller then array 2 one
while(array1.length<array2.length){
    //generate random int
    const randN = Math.random()
    //add random int
    array1.push(randN);
    //console log new element
    console.log('new element inserted: ' + randN)
}
//while the index of array 2 is smaller then array 1 one
while(array2.length<array1.length){
    //generate random int
    const randN = Math.random()
    //add random int
    array2.push(randN);
    //console log new element
    console.log('new element inserted: ' + randN)
}

//now arrays have equal size
console.log('arrays now have the same size')
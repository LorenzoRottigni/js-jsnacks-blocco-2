//acquire number and parse to int
const insertedNumber = parseInt(prompt('Inserisci un numero'));

//if number / 2 rest is 0
if(insertedNumber%2 === 0)
    //write inserted number
    document.write(insertedNumber)
else
    //write inserted odd number + 1
    document.write(insertedNumber + 1)

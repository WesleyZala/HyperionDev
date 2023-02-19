// Compulsory Task 1

// Array of words
const arrayOfWords = ["table", "leptop", "toilet", "door", "key", "bed", "refrigerator","oven","fork", "spoons"]

/*This function will take the array, and extract the words that have six letters
 and put them in a new array to be printed*/
 
const myFilterFunction = array => callback =>{
    const arrayWithSixOrMoreLetters = []
    for(let i=0; i < array.length; i++){
        if(array[i].length == 6){
            arrayWithSixOrMoreLetters.push(callback(array[i])) 
        }
    }
    return console.log(`The new array with six-letters words is: [${arrayWithSixOrMoreLetters}]`)
}

const words = myFilterFunction(arrayOfWords)(item => item + " ")

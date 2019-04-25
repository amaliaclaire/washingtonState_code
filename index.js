let dataArray = require('./data.js');
let namesOfStates = require('./usaStates.js')

// data normalization
// console.log(dataArray);





// uniqueArray(dataArray)


// an array of objects with a location of a key value pair
//  users insert the state that they are residing in
// need to convert all state names (example: washington) to WA.
// ensure end result will be .uppercase()
// array of words that trigger that function "washington, state of washington, washginton state" to format to WA
//  if object of array has "washington or WA in string, separate and push it into a string"
// convert it where it can be "held" and then

// if it contains washington or wa
// accurate -- pump the addresses into google maps api, give back a formated address provience or street address. It might cost money, free amount -- so many api requests for free, don't know the actual scale.
//  .sort()


// idea --- filter the array of strings and push all the strings that only have "WA".
//  all the left over ones, you will have to do the if else statement
// insert it back into the table
// name them state abbrivations
// console.log('dataOfStates', namesOfStates);
//Babies first go around probably just looks for the two letter identifier or the “substring” of the full state name
// .push element into a variable or hold it somewhere.
// look at libraries that give you close matches
//https://stackoverflow.com/questions/10018679/python-find-closest-string-from-a-list-to-another-string#10018734
//  INCLUDES https://stackoverflow.com/questions/1789945/how-to-check-whether-a-string-contains-a-substring-in-javascript --


let washingtonArray = namesOfStates.map(a => a.location)
let element = ''




  let test = ((array) => {
    let result = ''
    let newArray = []

      for (let i = 0; i < array.length; i++) {
        if(array[i] != 'WA' ) {
          newArray.push(array[i])
           newArray 

          // array[i] is the rest of the strings other than "WA" and you are assigning them all to become "WA"
            // have all the values be overrided and return 'WA'
        }
        // console.log('result', result);
        result
      }
  })


  test(washingtonArray)


  // for loop [i]
  // if it is NOT "WA" then proceed below. If it is WA then just return the string.
  // iterate over each one and see if they are already "assigned" by the "WA" substring of the full state name
  // have the end result be all WA




  //  washingtonArray.forEach((e) => {
  //    element = e
  //    console.log('element', element);
  //
  //    return element
  // })























// lll

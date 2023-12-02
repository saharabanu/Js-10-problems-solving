//  topics 1

// falsy value are: null, undefined, NaN, false, empty string, 0,
// remove all falsy value problem

const removeFalsyValue = ['hello', 0, '234', "", "Rahima", null];
// console.log(removeFalsyValue.filter(Boolean))


//  topics 2

// convert any value to boolean using !!

// console.log(!!"Rahima")
// console.log(!!"")
// console.log(!!0)
// console.log(!!"123")

//  topics 3 
// resize the array using array.length

const resizeArr = [1,2,3,4,5,6,7];
resizeArr.length =3
// console.log(resizeArr)

//  topics 4

// how to flattern a multiple dimensional array using flat method

const multipleArr = [3,5,[6,8], 34,78, [0,9,2]]

// console.log(multipleArr.flat())
// flat doesn't work when many dimensional array will be stored in an array then hat to use flat(infinity) method

const multipleArr1 = [3,5,[6,8,[100,200,300,4000]], 34,78, [0,9,2]]
// console.log(multipleArr1.flat())
// console.log(multipleArr1.flat(Infinity))

//topics 5
// short conditionals

const name = "rahima";

if (!name) {
    // console.log("Hi")
}
if(name === 'rahima' && name === "karim"){
    // console.log("hello")// no output
}
if(name === 'rahima' || name === "karim"){
    // console.log("hello") // hello output
}

// replace all occurances of a string using replace method and using regular expression

const replaceString = "React is JS framework. This framework is most popular.Most of the frontend developer use this framework";

// console.log(replaceString.replace(/framework/g, "library"))

// topics 7
// log values with variable names smartly
const library1 = "React";
const library2 = "JQuery";
const library3 = "PHP";

// console.log(`library1 - ${library1}`)
// smartly
// console.log({library1})

// topics 8
// to check performance of any task using performance

const startTime = performance.now();

for (let index = 0; index < 20; index++) {
    // console.log(index)
    
}
const endTime = performance.now();

// console.log(endTime-startTime)

// topics 9


function fizzBuzz() {
    let x = 1
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(x = "FizzBuzz")
        } else if (i % 3 == 0) {
            console.log(x = "Fizz")
        } else if (i % 5 == 0) {
            console.log(x = "Buzz")
        } else if (!(i % 3 == 0 && i % 5 == 0)) {
            console.log(i)
        } else {
            console.log(x++)
        }
    }
}

fizzBuzz()

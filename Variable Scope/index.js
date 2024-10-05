// rest parameters

const total = sum(1, 2)

function sum(...numbers) {

  let result = 0

  for(let number of numbers) {
    result += number
  }

  return result
}

console.log(`Your total is ${total}`)


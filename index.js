// Code your solutions in this file


let name 

function writeCards(name, event) { 

  const array = []

  for (let i = 0; i < name.length;i++) {
    array.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
  }
  return array
}

function countDown(i){
  while (i >= 0){
    console.log(i)
    i--
  }
}


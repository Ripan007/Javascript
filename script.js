function WhoIsThis() {
  console.log(this)
}

WhoIsThis()

const person = {
  name: 'janvi',
  greet: WhoIsThis,
}

person.greet()

function x() {
  for (var i = 1; i < 5; i++) {
    setTimeout(() => {
      console.log(i)
    }, i * 3000)
  }
}

x()

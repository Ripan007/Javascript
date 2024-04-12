function x() {
  for (let i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout((x) => {
        console.log(x)
      }, x * 2000)
    }
    close(i)
  }
}

x()

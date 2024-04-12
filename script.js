function x() {
  for (let i = 1; i <= 5; i++) {
    function close() {
      setTimeout(() => {}, x * 2000)
    }
    close()
  }
}

class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }
}
const myHashTable = new HashTable(50)
// myHashTable.set('grapes', 10000)
// myHashTable.get('grapes')
myHashTable._hash('grapes')

class MyArray{
constructor(){
this.length = 0;
this.data = {}
}
get(index){
return this.data[index]
}
push(item){
this.data[this.length ] = item;
this.length++;
return this.length
}
pop(){
const lastItem =this.data[this.length -1 ]
delete this.data[this.length -1]
this.length --;
return lastItem
}
delete(index){
const item =this.data[index];
this.shiftItems(index)

}
shiftItems(index){
for(let i=0;i<this.length  -1;i++){

}
this.data[i] =

}
}

const newArray = new MyArray()
newArray.push('hi');
newArray.push('gopi')
newArray.pop()
newArray.pop()
console.log(newArray)
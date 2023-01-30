
const  rotateLeft=(array, num)=> {
    for(let i = 0; i < num; i++) {
        let output = array[0];
        array.shift();
        array.push(output);
    }
    return array;
}
const result=rotateLeft([1, 2, 3, 4, 5], 2 )
console.log(result)
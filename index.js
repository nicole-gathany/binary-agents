console.log("html and javascript are connected");

function binaryAgent(str) {
let arr = str.split(" ");
console.log(arr);
let charCodeArr = []
//each string within the array has 8 numbers
//so there may be no need for a nested loop
let sum = 0;
// for(let i=0; i<arr.length; i++){
    if(arr[0].charAt(0)==="1"){
        sum +=128;
    }
    if(arr[0].charAt(1)==="1"){
        sum+=64;
    }
    if(arr[0].charAt(2)==="1"){
        sum+=32
    }
    if(arr[0].charAt(3)==="1"){
        sum+=16
    }
    if(arr[0].charAt(4)==="1"){
        sum+=8
    }
    if(arr[0].charAt(5)==="1"){
        sum+=4
    }
    if(arr[0].charAt(6)==="1"){
        sum+=2
    }
    if(arr[0].charAt(7)==="1"){
        sum+=1
    }
    charCodeArr.push(sum)
// }
    console.log(sum);
    console.log(charCodeArr)
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
  
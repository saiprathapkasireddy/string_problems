// Given an IP address - "111.139.161.143". Split it into its component parts 111, 139, 161, 143 and return it in an array in numeric values. [111, 139, 161, 143].


function string2(string){
    let numStr=string.split(".");
    let numArr=[];
    for(let num of numStr){
        numArr.push(+num);
    }

    return numArr;

}

module.exports=string2;

//console.log(string2("111.139.161.143"));
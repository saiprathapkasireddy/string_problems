// Given an array of strings ["the", "quick", "brown", "fox"], convert it into a string "the quick brown fox."
// If the array is empty, return an empty string.

function convertingToString(array){
    if(array.length===0){
        return " "
    }else{
        let res='';
        array.forEach(element => {
            res+=element+" "
            
        });

        return `${res}.`;


    }
}

module.exports=convertingToString;

//console.log(convertingToString([]));
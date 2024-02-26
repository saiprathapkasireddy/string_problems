// Given an object in the following format, return the full name in title case.
// {"first_name": "JoHN", "last_name": "SMith"}
// {"first_name": "JoHN", "middle_name": "doe", "last_name": "SMith"}

function fullName(obj){
    let full_name='';
    for(let key in obj){
        full_name+=obj[key]+" ";
    }

    return full_name;
}

module.exports=fullName;

//console.log(fullName({"first_name": "JoHN", "middle_name": "doe", "last_name": "SMith"}));
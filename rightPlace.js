function rightPlace(string, char, result){

    let answer = string.replace("_",char);
 
    let output = answer === result ? "Matched":"Not Matched";

    console.log(output);
    
    /* other answer with if-else

    if(answer === result){
        console.log("Matched");
    }else{
        console.log("Not Matched");
    }
    */


}
rightPlace('Str_ng', 'I',

'Strong');
  //"-fanger syntax ting - e.g. den globale variabel nedenunder. "

// totalGlobalVariable = "Never Ever!! do this!!!" 
// var globaleVariable = " also never ever do this!!!"


// use const whenever possible, else use let.
// about const:
// const cannot be undeclared or redelared 
// but  its value can be changed as long as you dont hange the assignment.
// men man kan godt ændre dens værdi fordi den ikke er immuteable

// var polluter alle spaces.

//global scope

function someOtherScope( ){
    // function scope 
}

{
    // block scope
    console.log("what is this")
}




{
    var someValue =  true;
    {
        var someValue = false;
    }
   // console.log(someValue);
}

{
    let someValue =  true;
    // lexical scope:
    {
        let someValue = false;  
    }

    console.log(someValue);
}
 // var polluter ude fra sit scope
 // var er forkert her:  det skal stå "let" før. fordi var ikke er bundet til scopet.
 for (var i = 0; i <= 5; i++){
    setTimeout(()=>{
        console.log(i);
    }, 1000)
 }
 

/* console.log(totalGlobalVariable) */
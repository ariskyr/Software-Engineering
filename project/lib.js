//use $("id") (JQuery-like)
function $(id){
    return document.getElementById(id);
}

//cast object from MongoDB find (after converting toArray) into class object
/* Example: let's say we got class Person{name, surname, age}
    and lets say there's a MongoDB find.toArray() that returns 
    someArray = [   
        {"name":"name1","surname":"surname1","age":"age1"},
        {"name":"name2","surname":"surname2","age":"age2"}
    ]
    All we need to do is call Object.cast(someArray[0], Person). A for(each) loop can cast all objects
    Alternative way would be var person1 = Object.assign(new Person, someArray[0])
    source: https://stackoverflow.com/questions/5873624/parse-json-string-into-a-particular-object-prototype-in-javascript
*/

Object.cast = function cast(rawObj, constructor)
{
    var obj = new constructor();
    obj = Object.assign(obj, rawObj)
    return obj;
} 


function registerX(){
    console.log("kalestike h registerX");
    $("regClose").style.animation = "slideOut";
}
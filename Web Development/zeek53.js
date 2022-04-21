function greet(name,greetText="Default Greeting:Good day"){
    console.log("....................")
  console.log( name+  ' is a good person');
  console.log(greetText+" "+name)
}
//greetText="Default Greeting:Good day" means when function is called and there is no greetText it will take equal to value as default.
let name0="Zeeshan";
let name1="Nida";
let name2="Kashif";
let name3="Shaheen";
let greetText="Good Morning";
let greetText1="Good Evening";

greet(name0,greetText);
greet(name0,greetText1);
greet(name1,greetText);
greet(name1,greetText1);
greet(name2,greetText);
greet(name2,greetText1);
greet(name3);
greet(name3);

function sum(a,b,c){
    console.log("....................")
    d=a+b+c;
    return d;  //After return no code  will be executed.
}
let returnValue = sum(1,2,30);
console.log("The sum of these numbers are: "+returnValue)


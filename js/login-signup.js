let name = document.getElementById('name');
let email= document.getElementById('email');
let pass = document.getElementById('password');
let cheek= document.getElementById('cheek');
let btn  = document.getElementById('btn');
console.log(name);
console.log(email);
console.log(pass);
console.log(cheek);
console.log(btn);


cheek.style.border='2px solid red';
//create and event for check box

if(cheek.checked){
    console.log("ok")
}else {
    console.log("no")
}
let name = document.getElementById('name');
let email= document.getElementById('email');
let pass = document.getElementById('password');
let cheek= document.getElementById('cheek');
let btn  = document.getElementById('si-up-btn');
btn.addEventListener("click", function(e) {
    e.preventDefault();
    if (pass.value === "") {
        pass.setAttribute('placeholder', "Password Field Cannot be Empty");
        pass.style.border = '2px solid red';
        pass.style.color = 'red';
    }
});

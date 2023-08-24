let img = document.querySelector('.img');
let container = document.querySelector('.container');


function change(phone,color){
    img.src = phone;
    container.style.background = color;
}

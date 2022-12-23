let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let login = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    login.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    cartItem.classList.remove('active');
    navbar.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.toggle('inactive');
    cartItem.classList.toggle('inactive');
    navbar.classList.toggle('inactive');

}

let var3 = document.getElementById("trash3");
var3.addEventListener('click', () => {
    let x = document.getElementById("c3").style.display = 'none';
    let y = document.getElementById("span1").innerHTML;
    let z = Number(y) - 45;
    document.getElementById("span1").innerHTML = z;

    // y.innerHTML = toString(z);=
    console.log(Number(y) - 45);
})

let var2 = document.getElementById("trash2");
var2.addEventListener('click', () => {
    let x = document.getElementById("c2").style.display = 'none';
    let y = document.getElementById("span1").innerHTML;
    let z = Number(y) - 45;
    document.getElementById("span1").innerHTML = z;

    // y.innerHTML = toString(z);
    console.log(Number(y) - 45);
})

let var1 = document.getElementById("trash1");
var1.addEventListener('click', () => {
    let x = document.getElementById("c1").style.display = 'none';
    let y = document.getElementById("span1").innerHTML;
    let z = Number(y) - 45;
    document.getElementById("span1").innerHTML = z;

    // y.innerHTML = toString(z);
    console.log(Number(y) - 45);
})
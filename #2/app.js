let selectedId;

var box = document.getElementsByClassName('content-wrapper');  

box[0].onclick = function(event) {
    let ourServises = event.target.parentElement;
    highligth(ourServises);
    console.log(event)
};   

function highligth (element) {
    if (selectedId) {
        selectedId.classList.remove('green')
    } 

    selectedId = element;
    selectedId.classList.add('green') 
     
}

// document.getElementsByClassName('h1-class')[0].innerHTML = "red21";
var h1 = document.getElementsByClassName('h1-class')[0]
h1.innerHTML = "123"; 
var button = document.getElementsByClassName('btn-now');
button[0].addEventListener('click', function() {
    var put = document.getElementsByClassName('input-num')[0].value
    document.getElementsByClassName('input-num')[0].classList.toggle("myStyle")

    // console.log('inputValue - ', put)
    if(!put.match(/[^0-9'".]/) && put != ''){
        h1.innerHTML = put;    
    } else {
        document.getElementsByClassName('input-num')[0].value = "";
    }
})

var icon = document.getElementsByClassName('icon-project');
var btn = document.getElementsByClassName('btn-first');

// first Button
btn[0].addEventListener('click', function() {
    icon[0].classList.toggle('hide')
})

// second Button
btn[1].addEventListener('click', function() {
    icon[1].classList.toggle('hide')
})

// third Button
btn[2].addEventListener('click', function() {
    icon[2].classList.toggle('hide')
})

//fourth button
btn[3].addEventListener('click', function() {
    icon[3].classList.toggle('hide')
})

var icons = document.querySelectorAll('.icon-project')
var but = document.querySelector('.btnAll')
but.addEventListener('click', function() {
    icons.forEach(element => {
        element.classList.toggle('hide')
        console.log(this)
    });
    icons.forEach(function(element) {
        element.classList.toggle('hide')
    })
})





// arraySparse.forEach((element) => {
//     console.log(element)
//     numCallbackRuns++
//   })











   




// console.log(h1)
// console.log(document.getElementsByClassName('h1-class'))
// console.log(document.getElementsByClassName('h1-class')[0].innerHTML)



// Задача: там де в тебе секція з цифрами, додай там інпут і кнопку. коли в цей інпут ти пишеш число і натискаєш на кнопку, то в першому елементі буде мінятись число.
// якщо ти пишеш наприклад букви, то цей текст не повинен міняти це число.


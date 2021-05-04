const numberOne = 5;

const numberTwo = 10;

const someWord = 'some word';

const shielding = 'Это константа \ "экронированая"';

let vareble = 'переменная';

console.log(numberOne + numberTwo);
console.log(numberOne + someWord);
console.log(shielding);
console.log(vareble);
console.log(true - false);

let a = 40;
a = a * 2;

try {
  document.querySelector('.test').innerHTML = a;
} 
catch(err) {
  console.log(err)
  console.log('Mistake');
}

console.log(a);

/* Ну и теперь самое интересное, работа с DOM */

let mouseOut = document.querySelector('.mouseOut');
let mouseOver = document.querySelector('.mouseOver');
let mouseClick = document.querySelector('.mouseClick');

mouseOut.addEventListener("mouseout", (e) => {
  e.target.style.color = "red";
})

mouseClick.addEventListener("click", (e) => {
  e.target.style.color = "green";
})

mouseOver.addEventListener("mouseover", (e) => {
  e.target.style.color = "blue";
})


let onFocus = document.getElementById('focus');
let errror = document.getElementById('error');


onFocus.onblur = () => {
  if(!onFocus.value.includes('@', 'com', 'ru', 'org')) {
    onFocus.classList.add('invalid');
    errror.innerHTML = 'Введите корректный email';
  }
};

onFocus.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    errror.innerHTML = "";
  }
};


let changeElement = document.querySelector('.blockD');

changeElement.addEventListener("click", (e) => {
  e.target.innerHTML= "Thanks you!";
})

let element = document.querySelector('.element');

function some() {
  element.addEventListener("click", () => {
    element.classList.toggle("block-element");
  })
}
  
some();


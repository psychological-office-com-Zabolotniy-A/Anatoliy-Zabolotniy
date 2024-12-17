





const showContact = document.querySelector('.btn-contact-us-a');
const blockShow = document.querySelector('.btn-contact-us-div')
const exitContact = document.querySelector('.exit-contact-us-div-a');

const exitbnt = document.querySelector('.form-out');
const inputNum = document.querySelector('.inputNum')
const inputNumber = document.querySelector('.inputNumber')
const showblockFooter = document.querySelector('.btn-footer-contact');

showContact.addEventListener('click', function() {
    blockShow.style.display = 'flex';
    event.preventDefault();

});
showblockFooter.addEventListener('click', function() {
    blockShow.style.display = 'flex';
    event.preventDefault();

});

exitContact.addEventListener('click', function() {
    blockShow.style.display = 'none';
    event.preventDefault();
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbwCX0oDFU7q12HNRs15H6RXn5yM27SGWNbpd-nunag94anPR5nVCTmzzGvQiYpYrcoGzQ/exec'
const form = document.forms['submit-to-google-sheet']


form.addEventListener('submit', e => {
    e.preventDefault();
    blockShow.style.display = 'none';
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => {
        console.log('Success!', response);
    })
    .catch(error => {
        console.error('Error!', error.message);
    });
});



const scriptURLReview ='https://script.google.com/macros/s/AKfycbyccxWRO9rBn1hFWRLQZ2CMwvc48jaDehXRl05zkpIypbURBcRIwDRZUyitTjz7NoV6UA/exec';
const formReview = document.forms['submit-to-google-sheet-review'];

formReview.addEventListener('submit', e => {
    e.preventDefault(); 
    fetch(scriptURLReview, { 
        method: 'POST', 
        body: new FormData(formReview)
    })
    .then(response => response.json()) 
    .then(data => {
        console.log('Success!', data); 
        formReview.reset(); 
    })
    .catch(error => {
        console.error('Error!', error.message);  
    });
});

const burgerMenu = document.querySelector('.phone-header-burger-menu');
const blockMenuShow = document.querySelector('.btn-contact-us-div-main-menu')

const exitContactMainMenu = document.querySelector('.exit-contact-us-div-main-menu')
const exitContactb = document.querySelector('.exit-contact-us-div-b');

exitContactb.addEventListener('click', function(){
    blockMenuShow.style.display = 'none';
    event.preventDefault();
});




burgerMenu.addEventListener('click', function() {
    blockMenuShow.style.display = 'flex';
});




const menuClick = document.querySelectorAll('#text-style-phone');

// Перебираємо кожен елемент і додаємо до нього обробник події
menuClick.forEach(function(element) {
    element.addEventListener('click', function() {
        blockMenuShow.style.display = 'none';  // Тут зникає блок
    });
});
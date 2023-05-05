
// Variable Page One


const pageOne = document.getElementById('page-one');
const spanOne = document.getElementById('span-one');

const pageTwo = document.getElementById('page-two');
const spanTwo = document.getElementById('span-two');

const pageThree = document.getElementById('page-three');
const spanThree = document.getElementById('span-three');

const pageFour = document.getElementById('page-four');
const spanFour = document.getElementById('span-four');

const inpName = document.getElementById('input-name');
let nameError = document.querySelector('.name-error');

const inpMail = document.getElementById('input-mail');
let mailError = document.querySelector('.mail-error');

const inpNumber = document.querySelector('#input-phone');
let phoneError = document.querySelector('.phone-error');

const submitOne = document.getElementById('submit-one');

const formOne = document.querySelector('.one');

const FormOne = document.querySelector('.form-1');

// Variable Page 2

const formTwo = document.querySelector('.two');
const backOne = document.getElementById('back1');

const selectArcade = document.getElementById('arcade');
const selectAdvanced = document.getElementById('advanced');
const selectPro = document.getElementById('pro');


// variable page 3

const addInputOne = document.getElementById('check-1');
const addInputTwo = document.getElementById('check-2');
const addInputThree = document.getElementById('check-3');
const addChangeOne = document.getElementById('inputs-1');
const addChangeTwo = document.getElementById('inputs-2');
const addChangeThree = document.getElementById('inputs-3');

const onlineYear = document.getElementById('online');
const largeYear = document.getElementById('large');
const customYear = document.getElementById('custom');

const back2 = document.getElementById('back2');



const formThree = document.querySelector('.form-3');


// Start Page 1 


// validation Page One


formOne.addEventListener('submit', e => {

  let validName = false;
  let validMail = false;
  let validNum = false;

  // checkInput();

  const nameValue = inpName.value.trim();
  const emailValue = inpMail.value.trim();
  const phoneValue = inpNumber.value.trim();

  const emailReg = /\w+@\w+.(com|org|net)/ig;

  let numReg = /\d{10}/ig;

  if (nameValue === '') {
    nameError.classList.remove('display-none');
    validName = false;
  } else {
    nameError.classList.add('display-none');
    validName = true;
  }

  if (!emailValue.match(emailReg)) {
    mailError.classList.remove('display-none');
    validMail = false;
  } else {
    mailError.classList.add('display-none')
    validMail = true;
  }

  if (phoneValue === '' || phoneValue.length < 11 || !phoneValue.match(numReg)) {
    phoneError.classList.remove('display-none');
    validNum = false;
  } else {
    phoneError.classList.add('display-none');
    validNum = true;
  }

  if (validName === false || validMail === false || validNum === false) {
    e.preventDefault();
  } else {
    e.preventDefault()
    FormOne.classList.add('display-none');
    spanOne.style.backgroundColor = 'transparent';
    spanOne.style.border = '1px solid white';
    spanOne.style.color = 'white';

    spanTwo.style.border = 'none';
    spanTwo.style.color = 'black';
    spanTwo.style.backgroundColor = '#d6d9e6';
    formTwo.classList.remove('display-none');
  }

})

// End Page 1 

//###########################################################

// pageOne.addEventListener('click',function(){
//   spanOne.style.color = 'black';
//   spanOne.style.backgroundColor = '#d6d9e6';
//   spanOne.style.border = 'none';

//   spanTwo.style.color = 'white';
//   spanTwo.style.backgroundColor = 'transparent';
//   spanTwo.style.border = '1px solid white';

//   spanThree.style.color = 'white';
//   spanThree.style.backgroundColor = 'transparent';
//   spanThree.style.border = '1px solid white';

//   spanFour.style.color = 'white';
//   spanFour.style.backgroundColor = 'transparent';
//   spanFour.style.border = '1px solid white';

//   FormOne.classList.remove('display-none');
//   formTwo.classList.add('display-none');
//   formThree.classList.add('display-none');
//   allFormFour.classList.add('display-none');

// })

// pageTwo.addEventListener('click', function(){
  
//   spanTwo.style.color = 'black';
//   spanTwo.style.backgroundColor = '#d6d9e6';
//   spanTwo.style.border = 'none';

//   spanOne.style.color = 'white';
//   spanOne.style.backgroundColor = 'transparent';
//   spanOne.style.border = '1px solid white';

//   spanThree.style.color = 'white';
//   spanThree.style.backgroundColor = 'transparent';
//   spanThree.style.border = '1px solid white';

//   spanFour.style.color = 'white';
//   spanFour.style.backgroundColor = 'transparent';
//   spanFour.style.border = '1px solid white';

//   FormOne.classList.add('display-none');
//   formTwo.classList.remove('display-none');
//   formThree.classList.add('display-none');
//   allFormFour.classList.add('display-none');
// })

// pageThree.addEventListener('click', function(){
  
//   spanThree.style.color = 'black';
//   spanThree.style.backgroundColor = '#d6d9e6';
//   spanThree.style.border = 'none';

//   spanOne.style.color = 'white';
//   spanOne.style.backgroundColor = 'transparent';
//   spanOne.style.border = '1px solid white';

//   spanTwo.style.color = 'white';
//   spanTwo.style.backgroundColor = 'transparent';
//   spanTwo.style.border = '1px solid white';

//   spanFour.style.color = 'white';
//   spanFour.style.backgroundColor = 'transparent';
//   spanFour.style.border = '1px solid white';

//   FormOne.classList.add('display-none');
//   formTwo.classList.add('display-none');
//   formThree.classList.remove('display-none');
//   allFormFour.classList.add('display-none');
// })

// pageFour.addEventListener('click', function(){
  
//   spanFour.style.color = 'black';
//   spanFour.style.backgroundColor = '#d6d9e6';
//   spanFour.style.border = 'none';

//   spanOne.style.color = 'white';
//   spanOne.style.backgroundColor = 'transparent';
//   spanOne.style.border = '1px solid white';

//   spanTwo.style.color = 'white';
//   spanTwo.style.backgroundColor = 'transparent';
//   spanTwo.style.border = '1px solid white';

//   spanThree.style.color = 'white';
//   spanThree.style.backgroundColor = 'transparent';
//   spanThree.style.border = '1px solid white';

//   FormOne.classList.add('display-none');
//   formTwo.classList.add('display-none');
//   formThree.classList.add('display-none');
//   allFormFour.classList.remove('display-none');
// })


// *************************************************************

// Start Page 2




document.addEventListener('DOMContentLoaded', function(){

const arcade = document.getElementById('arcade');
const advanced = document.getElementById('advanced');
const pro = document.getElementById('pro');

arcade.addEventListener('click',function(){

  arcade.style.border = '2px solid #473dff';
  advanced.style.border = '1px solid #eee';
  pro.style.border = '1px solid #eee';
})

advanced.addEventListener('click',function(){

  advanced.style.border = '2px solid #473dff';
  arcade.style.border = '1px solid #eee';
  pro.style.border = '1px solid #eee';
})

pro.addEventListener('click',function(){

  pro.style.border = '2px solid #473dff';
  arcade.style.border = '1px solid #eee';
  advanced.style.border = '1px solid #eee';
})


})



const month = document.getElementById('month');

const year = document.getElementById('year');

const toggle = document.getElementById('toggle');

const montOne = document.querySelector('.monthPrice1')
const montTwo = document.querySelector('.monthPrice2')
const montThree = document.querySelector('.monthPrice3')

const yearOne = document.querySelector('.yearPrice1')
const yearTwo = document.querySelector('.yearPrice2')
const yearThree = document.querySelector('.yearPrice3')

const freeOne = document.querySelector('.free1')
const freeTwo = document.querySelector('.free2')
const freeThree = document.querySelector('.free3')




    toggle.addEventListener('change', function(){

      if (toggle.checked) {
        
        month.style.color = '#9699ab';
        year.style.color = 'black';
        montOne.classList.add('display-none');
        montTwo.classList.add('display-none');
        montThree.classList.add('display-none');
        yearOne.classList.remove('display-none');
        yearTwo.classList.remove('display-none');
        yearThree.classList.remove('display-none');
        freeOne.classList.remove('display-none');
        freeTwo.classList.remove('display-none');
        freeThree.classList.remove('display-none');

        onlineYear.textContent = '+$10/yr';
        largeYear.textContent = '+$20/yr';
        customYear.textContent = '+$20/yr';

        currentName.textContent = 'Arcade (Yearly)';
        currentPriceName.textContent = '$90/yr';
        serviceOne.textContent = '+$10/yr';
        serviceTwo.textContent = '+$20/yr';

        totalPage4.textContent = 'Total (per year)';
        allSalary.textContent = '+$120/yr';

      } else {
        month.style.color = 'black';
        year.style.color = '#9699ab';
        montOne.classList.remove('display-none');
        montTwo.classList.remove('display-none');
        montThree.classList.remove('display-none');
        yearOne.classList.add('display-none');
        yearTwo.classList.add('display-none');
        yearThree.classList.add('display-none');
        freeOne.classList.add('display-none');
        freeTwo.classList.add('display-none');
        freeThree.classList.add('display-none');

        onlineYear.textContent = '+$1/mo';
        largeYear.textContent = '+$2/mo';
        customYear.textContent = '+$2/mo';

        currentName.textContent = 'Arcade (Monthly)'
        currentPriceName.textContent = '$9/mo';
        serviceOne.textContent = '+$1/mo';
        serviceTwo.textContent = '+$2/mo';

        totalPage4.textContent = 'Total (per month)';
        allSalary.textContent = '+$12/mo'

      }

    })


    formTwo.addEventListener("submit", i =>{
      i.preventDefault();
      formTwo.classList.add('display-none')
      formThree.classList.remove('display-none')
      spanThree.style.color = 'black';
      spanThree.style.border = 'none';
      spanThree.style.backgroundColor = '#d6d9e6';
      spanTwo.style.border = '1px solid white';
      spanTwo.style.color = 'white';
      spanTwo.style.background = 'transparent';

    }) 

    backOne.addEventListener('click',function(){
    formTwo.classList.add('display-none');
    FormOne.classList.remove('display-none')

    spanTwo.style.backgroundColor = 'transparent';
    spanTwo.style.border = '1px solid white';
    spanTwo.style.color = 'white';

    spanOne.style.border = 'none';
    spanOne.style.color = 'black';
    spanOne.style.backgroundColor = '#d6d9e6';
    })

    selectArcade.addEventListener('click',function(){
      
      if (!toggle.checked) {
        currentName.textContent = 'Arcade (Monthly)';
        currentPriceName.textContent = '$9/mo';
        serviceOne.textContent = '+$1/mo';
        serviceTwo.textContent = '+$2/mo';
        allSalary.textContent = '+$12/mo';
      } else {
        currentName.textContent = 'Arcade (Yearly)';
        currentPriceName.textContent = '$90/yr';
        serviceOne.textContent = '+$10/yr';
        serviceTwo.textContent = '+$20/yr';
        allSalary.textContent = '+$120/yr';
      }

    })

    selectAdvanced.addEventListener('click',function(){
      
      if (!toggle.checked) {
        currentName.textContent = 'Advanced (Monthly)';
        currentPriceName.textContent = '$12/mo';
        serviceOne.textContent = '+$1/mo';
        serviceTwo.textContent = '+$2/mo';
        allSalary.textContent = '+$15/mo'
      } else {
        currentName.textContent = 'Advanced (Yearly)';
        currentPriceName.textContent = '$120/yr';
        serviceOne.textContent = '+$10/yr';
        serviceTwo.textContent = '+$20/yr';
        allSalary.textContent = '+$150/yr'
      }

    })

    selectPro.addEventListener('click',function(){
      
      if (!toggle.checked) {
        currentName.textContent = 'Pro (Monthly)';
        currentPriceName.textContent = '$15/mo';
        serviceOne.textContent = '+$1/mo';
        serviceTwo.textContent = '+$2/mo';
        allSalary.textContent = '+$18/mo'
      } else {
        currentName.textContent = 'Pro (Yearly)';
        currentPriceName.textContent = '$150/yr';
        serviceOne.textContent = '+$10/yr';
        serviceTwo.textContent = '+$20/yr';
        allSalary.textContent = '+$180/yr'
      }

    })


// End Page 2

// ########################################################


// Start Page 3

addInputOne.addEventListener('change', function(){
  if (addInputOne.checked) {
    addChangeOne.style.border = '2px solid #02295a';
  } else {
    addChangeOne.style.border = '1px solid #ccc';
  }
})

addChangeTwo.addEventListener('change', function(){
  if (addInputTwo.checked) {
    addChangeTwo.style.border = '2px solid #02295a';
  } else
  addChangeTwo.style.border = '1px solid #ccc';
})

addChangeThree.addEventListener('change', function(){
  if (addInputThree.checked) {
    addChangeThree.style.border = '2px solid #02295a';
  } else
  addChangeThree.style.border = '1px solid #ccc';
})
 


formThree.addEventListener('submit', t => {
  
  if (!addInputOne.checked && !addInputTwo.checked && !addInputThree.checked) {
    t.preventDefault();
  } else {
    t.preventDefault();
    allFormFour.classList.remove('display-none');
    formThree.classList.add('display-none')
    spanFour.style.backgroundColor = '#d6d9e6';
    spanFour.style.color = 'black';
    spanFour.style.border = 'none';
    spanThree.style.backgroundColor = 'transparent';
    spanThree.style.color = 'white';
    spanThree.style.border = '1px solid white';
  }

})

back2.addEventListener('click',function(){
  formThree.classList.add('display-none');
  formTwo.classList.remove('display-none');
  spanThree.style.backgroundColor = 'transparent';
  spanThree.style.border = '1px solid white';
  spanThree.style.color = 'white';
  spanTwo.border = 'none';
  spanTwo.style.backgroundColor = '#d6d9e6';
  spanTwo.style.color = 'black';
})

// End Page 3

//  ########################################################

// Start Page 4


const currentName = document.getElementById('current-price');
const currentPriceName = document.getElementById('current-salary');

const serviceOne = document.getElementById('current-salary-service1');
const serviceTwo = document.getElementById('current-salary-service2');

const totalPage4 = document.getElementById('total-Page4');
const allSalary = document.getElementById('total-price-Page4');

const changePlane = document.getElementById('change-plane');

const back3 = document.getElementById('back3');

const allFormFour = document.querySelector('.form-4');

const formFour = document.querySelector('.four');

const thanks = document.querySelector('.thanks');


formFour.addEventListener('submit', e => {
  e.preventDefault();
  thanks.classList.remove('display-none')
  allFormFour.classList.add('display-none')
})

back3.addEventListener('click',function(){
  allFormFour.classList.add('display-none');
  formThree.classList.remove('display-none');
  spanFour.style.color = 'white';
  spanFour.style.border = '1px solid white';
  spanFour.style.backgroundColor = 'transparent';
  spanThree.style.backgroundColor = '#d6d9e6';
  spanThree.style.border = 'none';
  spanThree.style.color = 'black';
})

changePlane.addEventListener('click', function(){
  allFormFour.classList.add('display-none');
  formTwo.classList.remove('display-none');

  spanFour.style.color = 'white';
  spanFour.style.border = '1px solid white';
  spanFour.style.backgroundColor = 'transparent';
  spanTwo.style.backgroundColor = '#d6d9e6';
  spanTwo.style.border = 'none';
  spanTwo.style.color = 'black';
})

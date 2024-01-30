const calculateBtn = document.querySelector('.calculator__btn');
const resultA = document.querySelector('.result-a');
const resultB = document.querySelector('.result-b');
const resultC = document.querySelector('.result-c');
const resultD = document.querySelector('.result-d');
const resultE = document.querySelector('.result-e');

const calculate = function(){
  const activeProduct = document.querySelector('.calculator-product').getAttribute('data-intencity');
  const activeSkinTypeA = document.querySelector('.skin-type').getAttribute('data-sequence-a');
  const activeSkinTypeB = document.querySelector('.skin-type').getAttribute('data-sequence-b');
  const activeSkinTypeC = document.querySelector('.skin-type').getAttribute('data-sequence-c');
  const activeSkinTypeD = document.querySelector('.skin-type').getAttribute('data-sequence-d');
  const activeSkinTypeE = document.querySelector('.skin-type').getAttribute('data-sequence-e');

  let productIntencity = activeProduct;
  let skinTypeA = activeSkinTypeA;
  let skinTypeB = activeSkinTypeB;
  let skinTypeC = activeSkinTypeC;
  let skinTypeD = activeSkinTypeD;
  let skinTypeE = activeSkinTypeE;

  let calculateA;
  let calculateB;
  let calculateC;
  let calculateD;
  let calculateE;


  calculateA = Math.round(skinTypeA * 1000 / productIntencity);
  calculateB = Math.round(skinTypeB * 1000 / productIntencity);
  calculateC = Math.round(skinTypeC * 1000 / productIntencity);
  calculateD = Math.round(skinTypeD * 1000 / productIntencity);
  calculateE = Math.round(skinTypeE * 1000 / productIntencity);

  resultA.innerText = calculateA;
  resultB.innerText = calculateB;
  resultC.innerText = calculateC;
  resultD.innerText = calculateD;
  resultE.innerText = calculateE;


  // console.log(calculateA);
  // console.log(calculateB);
  // console.log(calculateC);
  // console.log(calculateD);
  // console.log(calculateE);

};

calculateBtn.addEventListener('click', () => {
  calculate();
})





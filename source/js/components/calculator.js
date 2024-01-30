const calculateBtn = document.querySelector('.calculator__btn');
const resultA = document.querySelector('.result-a');
const resultB = document.querySelector('.result-b');
const resultC = document.querySelector('.result-c');
const resultD = document.querySelector('.result-d');
const resultE = document.querySelector('.result-e');

function secondsToTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

  return formattedMinutes + ':' + formattedSeconds;
}

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

  calculateA

  resultA.innerText = secondsToTime(calculateA);
  resultB.innerText = secondsToTime(calculateB);
  resultC.innerText = secondsToTime(calculateC);
  resultD.innerText = secondsToTime(calculateD);
  resultE.innerText = secondsToTime(calculateE);
};

calculateBtn.addEventListener('click', () => {
  calculate();
})





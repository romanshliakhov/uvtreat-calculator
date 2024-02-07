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

const calculate = function() {
  const activeProduct = parseFloat(document.querySelector('.calculator-product').getAttribute('data-intencity'));
  const activeSkinTypeA = parseFloat(document.querySelector('.skin-type').getAttribute('data-sequence-a'));
  const activeSkinTypeB = parseFloat(document.querySelector('.skin-type').getAttribute('data-sequence-b'));
  const activeSkinTypeC = parseFloat(document.querySelector('.skin-type').getAttribute('data-sequence-c'));
  const activeSkinTypeD = parseFloat(document.querySelector('.skin-type').getAttribute('data-sequence-d'));
  const activeSkinTypeE = parseFloat(document.querySelector('.skin-type').getAttribute('data-sequence-e'));

  // Проверяем, что все значения являются числами
  if (isNaN(activeProduct) || isNaN(activeSkinTypeA) || isNaN(activeSkinTypeB) || isNaN(activeSkinTypeC) || isNaN(activeSkinTypeD) || isNaN(activeSkinTypeE)) {
    return;
  }

  let calculateA = Math.round(activeSkinTypeA * 1000 / activeProduct);
  let calculateB = Math.round(activeSkinTypeB * 1000 / activeProduct);
  let calculateC = Math.round(activeSkinTypeC * 1000 / activeProduct);
  let calculateD = Math.round(activeSkinTypeD * 1000 / activeProduct);
  let calculateE = Math.round(activeSkinTypeE * 1000 / activeProduct);

  resultA.innerText = secondsToTime(calculateA);
  resultB.innerText = secondsToTime(calculateB);
  resultC.innerText = secondsToTime(calculateC);
  resultD.innerText = secondsToTime(calculateD);
  resultE.innerText = secondsToTime(calculateE);
};

const resultOne = document.querySelector('.result-one');

const calculateSingle = function() {
  const productPowerInput = document.querySelector('.power');
  const personalDoseInput = document.querySelector('.dose');

  // Проверяем, что введенные значения являются числами
  const isNumber = (value) => !isNaN(parseFloat(value)) && isFinite(value);

  if (!isNumber(productPowerInput.value) || !isNumber(personalDoseInput.value)) {
    // Если введенные значения не являются числами, очищаем поле результата и выходим из функции
    return;
  }

  // Преобразуем введенные значения в числа
  const productPower = parseFloat(productPowerInput.value);
  const personalDose = parseFloat(personalDoseInput.value);

  if (productPower === 0) {
    // Если productPower равен нулю, выводим сообщение об ошибке и выходим из функции
    return;
  }

  // Вычисляем значение calculateOne и выводим его
  const calculateOne = Math.round(personalDose * 1000 / productPower);
  resultOne.innerText = secondsToTime(calculateOne);
};

calculateBtn.addEventListener('click', () => {
  calculate();
  calculateSingle();
})

const calculatorBox = document.querySelector('.calculator__info');
const radioButtons = document.querySelectorAll('input[name="calculator"]');
const calculatorBtnBox = document.querySelector('.calculator__results-variants');

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', function (e) {
    if (this.value === 'manual') {
      calculatorBox.classList.add('manual');
      calculatorBtnBox.classList.add('manual');
    } else {
      calculatorBox.classList.remove('manual');
      calculatorBtnBox.classList.remove('manual')
    }
  });
});











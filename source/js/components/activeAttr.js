const calculateAria = document.querySelectorAll('.calculator__select');

calculateAria.forEach(item => {
  let ariaSelect = item.querySelector('.calculator__select-body');
  let currentProduct = item.querySelector('.calculator-product');
  let currentSkin = item.querySelector('.skin-type');
  let options = ariaSelect.querySelectorAll('li');

  if(currentProduct) {
    options.forEach(att => {
      let intencity = att.getAttribute('data-intencity');

      att.addEventListener('click', () => {
        currentProduct.setAttribute('data-intencity', intencity);
      })
    });
  }

  if(currentSkin) {
    options.forEach(att => {
      let sequenceA = att.getAttribute('data-sequence-a');
      let sequenceB = att.getAttribute('data-sequence-b');
      let sequenceC = att.getAttribute('data-sequence-c');
      let sequenceD = att.getAttribute('data-sequence-d');
      let sequenceE = att.getAttribute('data-sequence-e');

      att.addEventListener('click', () => {
        currentSkin.setAttribute('data-sequence-a', sequenceA);
        currentSkin.setAttribute('data-sequence-b', sequenceB);
        currentSkin.setAttribute('data-sequence-c', sequenceC);
        currentSkin.setAttribute('data-sequence-d', sequenceD);
        currentSkin.setAttribute('data-sequence-e', sequenceE);
      })
    });
  }
});








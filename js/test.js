const textBox = document.querySelector('.step-text');
const dot2 = document.querySelector('.dot2');
const yes = document.querySelector('.def-yes-c');
const next = document.querySelector('.btnNext');
const stepText = document.querySelector('.step');

yes.addEventListener('click', function() {
   yes.style.backgroundColor = "#00DCA7"
});

next.addEventListener('click', function() {
   dot2.style.backgroundColor = "#00DCA7"
   dot2.style.borderColor = "#00DCA7"
   textBox.textContent = "I prefer to develop my own solutions rather than act schematically and based on the information I receive."
   stepText.textContent = "Step 2"
   yes.style.backgroundColor = "#1A1A1A"
});
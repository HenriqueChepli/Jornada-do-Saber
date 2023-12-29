const showFaq = document.querySelectorAll(
    '#btn-abrir-pr'
);

const downArrowIcon = ``;
const closeArrowIcon = ``;

function showFaqanswer() {
    let faqQuestionDiv =  this.parentElement.parentElement;
   faqQuestionDiv.classList.toggle('active')

    if (faqQuestionDiv.classList.contains('active')) {

    }
}

function closeFaqanswer() {
    this.parentElement.parentElement.classList.remove('active')
}



showFaq.forEach(showFaq => {
    showFaq.addEventListener('click', showFaqanswer);
})
const nav = document.getElementById('cardNav');
const fis = document.getElementById('cardFis');
const qui = document.getElementById('cardQui');
const con = document.getElementById('cardCon');

/* Card Matemática */

const btnNav = document.getElementById('btn-cardMat');

function toggleNav() {
  nav.classList.toggle('active');
  fis.classList.remove('active');
  qui.classList.remove('active');
  con.classList.remove('active');
}

btnNav.addEventListener('click', toggleNav);

/* Card Física */

const btnFis = document.getElementById('btn-cardFis');

function toggleFis() {
  fis.classList.toggle('active');
  nav.classList.remove('active');
  qui.classList.remove('active');
  con.classList.remove('active');
}

btnFis.addEventListener('click', toggleFis);

/* Card Física */

const btnQui = document.getElementById('btn-cardQui');

function toggleQui() {
  qui.classList.toggle('active');
  nav.classList.remove('active');
  fis.classList.remove('active');
  con.classList.remove('active');
}

btnQui.addEventListener('click', toggleQui);

/* Card Configurações */

const btnCon = document.getElementById('btn-cardCon');

function toggleCon() {
  con.classList.toggle('active');
  nav.classList.remove('active');
  fis.classList.remove('active');
  qui.classList.remove('active');
}

btnCon.addEventListener('click', toggleCon);

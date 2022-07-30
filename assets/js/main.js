const bottle = document.querySelector('.bottle');
const bottleGoalText = document.querySelector('.bottle__goal');

const watter = document.querySelector('.watter');
const watterText = document.querySelector('.watter__text');

const cups = document.querySelectorAll('.cup');

const cupsCountLS = getCountLs(); 
if(cupsCountLS >= 0) {
  fillBottle(+cupsCountLS + 1);
  addActiveCup(cupsCountLS);
}

cups.forEach((cup1, idx1) => {
  cup1.addEventListener('click', () => {
    let active = document.querySelectorAll('.active'); 

    if(active.length - 1 === idx1) {
      cup1.classList.remove('active')

      fillBottle(idx1);
      updateLS(idx1 - 1);

      return;
    }

    updateLS(idx1);
    removeActiveCup();
    addActiveCup(idx1);
    fillBottle(idx1 + 1);

  })
})

function addActiveCup(idx1) {
  cups.forEach((cup2, idx2) => {
    if(idx2 <= idx1) {
      cup2.classList.add('active');
    }
  })
}

function removeActiveCup() {
  cups.forEach((cup, idx) => {
    cup.classList.remove('active');
  })
}

function fillBottle(tottalCups) {
  const bottleH = bottle.clientHeight; 

  const remainedLiters = 2 - tottalCups * 0.25;
  const watterHeight = bottleH / cups.length * tottalCups;
  const drankPrecent = (100 / cups.length) * tottalCups;
  
  bottleGoalText.textContent =  remainedLiters + 'L';
  watter.style.minHeight = watterHeight + 'px';

  if((100 / cups.length) * tottalCups > 0) {
    watterText.textContent = drankPrecent + '%';
  }else {
    watterText.textContent = '';
  }

}

function updateLS(count) {
  localStorage.setItem('cupsCount', count)
}

function getCountLs() {
  return localStorage.getItem('cupsCount');
}
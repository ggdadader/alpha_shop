import './scss/main.scss'
console.log('JS loaded!')


const form = document.getElementById('a-form')
const formParts = form.querySelectorAll('.part')
const stepControl = document.getElementById('step-control')
const steps = stepControl.querySelectorAll('.step')
const btnControl = document.getElementById('btn-control')
const nextBtn = btnControl.querySelector('.btn-primary')
const prevBtn = btnControl.querySelector('.btn-outline')
let activeCard = 0
let step = 0




function handleBtnControlClicked(e) {
  e.preventDefault()
  const nowStep = steps[step]
  if (e.target.matches('.btn-primary') && e.target.innerHTML === '下一步') {
    const nextStep = steps[step + 1]
    nowStep.classList.remove('active')
    nowStep.classList.add('checked')
    nextStep.classList.add('active')
    formParts[step].classList.toggle('d-none')
    formParts[step + 1].classList.toggle('d-none')
    step += 1
  } else if (e.target.matches('.btn-outline')) {
    const prevStep = steps[step - 1]
    nowStep.classList.remove('active')
    prevStep.classList.remove('checked')
    prevStep.classList.add('active')
    formParts[step].classList.toggle('d-none')
    formParts[step - 1].classList.toggle('d-none')
    step -= 1
  }
  setBtnDisabled()
}


function setBtnDisabled() {
  if (step === 0) {
    prevBtn.setAttribute('none', 'none')
  } else {
    prevBtn.removeAttribute('disabled')
  }
  if (step === 2) {
    nextBtn.innerHTML = '送出申請'
  } else {
    nextBtn.innerHTML = '下一步'
  }
}

btnControl.addEventListener('click', handleBtnControlClicked)

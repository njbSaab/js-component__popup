const popupLinks = document.querySelectorAll('.popup-link')
const body = document.querySelector('body')
const lockPadding = document.querySelectorAll('.lock-padding')

let unlock = true
//добавляем событие на кнопки
if(popupLinks.length > 0) {
   for(let index = 0; index < popupLinks.length; index++){
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function(e){
         const popupName = popupLink.getAttribute('href').replace('#', '')
         const curentPopup = document.getElementById(popupName)
         popupOpen(curentPopup)
         e.preventDefault()
      })
   }
}

//событие на попап
const popupCloseIcon = document.querySelectorAll('.close-popup')
if(popupCloseIcon.length > 0) {
   for(let index = 0; index<popupCloseIcon.length; index++){
      const el = popupCloseIcon[index]
      el.addEventListener('click', function(e) {
         popupClose(el.closest('.popup'))
      })
   }
}


function popupOpen(curentPopup){
   curentPopup.classList.add('open')
   curentPopup.addEventListener("click", function(e) {
      if(!e.target.closest('.popup__content')){
         popupClose(e.target.closest('.popup'))
      }
   })
}
//удаление классы опен 
function popupClose(popupActive){
   if(unlock){
      popupActive.classList.remove('open')
      
   }
}
//закрытие по esc
document.addEventListener('keydown', function(e) {
   if(e.which ===27){
      const popupActive = document.querySelector('.popup.open')
      popupClose(popupActive)
   }
})
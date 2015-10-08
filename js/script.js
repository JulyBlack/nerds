var contactButton = document.querySelector(".main-contacts a");
var contactForm = document.querySelector(".modal-content");
var close = document.querySelector(".modal-close");

contactButton.addEventListener("click", function(event){
  event.preventDefault();
  contactForm.classList.add("modal-content-show");
});

close.addEventListener("click", function(event){
  event.preventDefault();
  contactForm.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event){
  if (event.keyCode == 27){
    if (contactForm.classList.contains("modal-content-show")){
      contactForm.classList.remove("modal-content-show");
	}
  }
});
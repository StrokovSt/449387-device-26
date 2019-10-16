  var link = document.querySelector(".login-link");
  
  var popup = document.querySelector(".modal-login");
  var form = popup.querySelector("form");
  var close = popup.querySelector(".modal-close");
  var login = popup.querySelector("[name=login]");
  var comment = popup.querySelector("[name=comment");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
  });
    
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });
   
  form.addEventListener("submit", function (evt) {
    if (!login.value || !comment.value) {
      evt.preventDefault();
      alert("Введите имя и ваше сообщение");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });

  var mapLink = document.querySelector(".button-map");

  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-close");
  
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show-flex");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show-flex");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show-flex")) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show-flex");
      }
    }
  });
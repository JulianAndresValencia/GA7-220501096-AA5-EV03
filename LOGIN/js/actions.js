jQuery(function($) {
  let e = document.querySelector('.flexslider');
  $(e).flexslider({
    animation: "slide",
    controlNav: true, // Flechitas laterales
    animationLoop: false, // Quitar el límite
    slideshow: true,
    direction: "horizontal",
    mousedrag: true,  // Habilitar el arrastre
  });
});
/*
//Escoger el form por su id
const fromElement =  document.getElementById("formu");
fromElement.addEventListener("submit",(event) => {
  
  event.preventDefault();
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  let transaction = {user:user, pass:pass}
  let transactionJson = JSON.stringify(transaction);
 
  const options = {
    method : "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body : transactionJson
  }
  fetch('http://localhost:30001/api/user',options)
    .then(res => res.json())
    .then(response =>{
      console.log(response);
      (response == "correcto") ? alert("Iniciaste Sesión"):alert("Usuario o contraseña Incorrectos");
    })
})
*/
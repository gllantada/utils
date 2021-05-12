function clickbutton() {
  var div = document.getElementById("texto");
  console.log(div);
  div.innerText = "soy pipe y soy cagon";
  console.log("hola");
  setTimeout(() => {
    div.innerText = "es mentira soy solo puto";
  }, 2000);
}

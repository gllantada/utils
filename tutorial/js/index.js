window.onload = () => {
  let mydiv = document.getElementById("root");
  console.log(mydiv);

  var arraypepe = [
    2,
    -5,
    { nombre: "pedro", apellido: "perez" },
    "pedpe",
    3,
    0,
    12,
    2,
  ];
  for (let index = 0; index < arraypepe.length; index++) {
    if (arraypepe[index] > 0) {
      console.log("es mayor");
    } else if (arraypepe[index] === 0) {
      console.log("es cero");
    } else if (arraypepe[index] < 0) {
      console.log("es menor");
    } else if (typeof arraypepe[index] == "object") {
      console.log(arraypepe[index].nombre, " ", arraypepe[index].apellido);
    } else {
      console.log(arraypepe[index]);
    }
  }
  for (let i = 0; i < 100; i++) {
    console.log(i);
  }
};

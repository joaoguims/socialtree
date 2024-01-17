function toggleMode(){
  const html= document.documentElement
  html.classList.toggle("ligth")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //subtituir a imagem
  if (html.classList.contains("ligth")){
    //se tiver ligth mode, adicionar a imagem ligth
    img.setAttribute("src", "./assets/avatar-ligth.png")
  } else {
    //se tiver sem ligth mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.jpg")
  }
}

corpo.oninput = function(){
  corpo.style.backgroundColor = cor.value

  if(cor.value < "#636363"){
    titulo.style.color = "white"
  }
  else{
    titulo.style.color = "black"
  }
}

function toggleMode(){
    const html = document.documentElement
    // Trocar de mode 
    html.classList.toggle('light')
    // Alterar as img
    const img = document.querySelector("#cont img")
    //Subistituir a imagem
    if(html.classList.contains("light")){
        //Se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./img/perf.png")
    }else{
        //se tiver sem light manter a imagem normal
        img.setAttribute("src", "./img/perfil.png")
    }
}
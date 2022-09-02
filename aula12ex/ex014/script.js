function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e8e88c'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!!
        img.src = 'fototarde.png'
        document.body.style.background = '#b27f6c'
    } else {
        //BOA NOITE!!
        img.src = 'fotonoite.png'
        document.body.style.background = '#236073'
    }
}

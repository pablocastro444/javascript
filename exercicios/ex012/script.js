function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value > ano)) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src','foto-adulto-m.png')
            } else {
                //IDOSO
                img.setAttribute('')
            }
                

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //CRIANÇA
            } else if (idade < 21) {
                //JOVEM
            } else if (idade < 50) {
                //ADULTO
            } else {
                //IDOSO
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}
function carregar(){
    var msg = window.document.getElementById('msg')
    var saudacao = window.document.getElementById('saudacao')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 18
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'foto-manha.png'
        document.body.style.backgroundColor = 'rgb(98, 151, 211)'
        saudacao.innerHTML = 'Boom diiaa, Eliza! &#x2764;'
        frase.innerHTML = 'Espero que seu dia seja sensacional e que vc esteja se sentindo melhor'
    }else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'foto-tarde.png'
        document.body.style.backgroundColor = '#E8B88A'
        saudacao.innerHTML = 'Boaaa tardee, Eliza! &#x2764;'
        frase.innerHTML = 'eai LINDEZA, ta tendo um dia bom?? espero q sim'
    }else{
        //boa noite
        img.src = 'foto-noite.png'
        document.body.style.backgroundColor = '#4C4A4C'
        saudacao.innerHTML = 'Boaa noitee, Eliza! &#x2764;'
        frase.innerHTML = 'Espero q tenha sido um dia INCRÍVEL, igual vc'
    }
}

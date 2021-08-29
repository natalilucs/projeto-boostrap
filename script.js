


// Validação de formulário em Javascript 27 a 110


window.onscroll = function () {
    scroll();
}

function scroll() {
    var btn = document.getElementById("subirTopo");
    if (document.documentElement.scrollTop >= 400) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none"
    }
}


function voltarTop(){
    document.documentElement.scrollTop = 0;
}



function validaNome(){
    var infonome = document.getElementById("nome").value;
    if(infonome == "" || !(isNaN(infonome)) || infonome.length < 3){        
        document.getElementById('nome').style.border = "red solid 3px";
        console.log("nome inválido")
    } 
    else {        
        document.getElementById('nome').style.border = "green solid 3px";
        console.log("nome válido")
    }

} 

function validaSobrenome(){
    var infosobrenome = document.getElementById("nome").value;
    if(infosobrenome == "" || !(isNaN(infosobrenome)) || infosobrenome.length < 3){        
        document.getElementById('sobrenome').style.border = "red solid 3px";
        console.log("sobrenome inválido")
    } 
    else {        
        document.getElementById('sobrenome').style.border = "green solid 3px";
        console.log("sobrenome válido")
    }

} 

function validaEmail(field){
    usuario = field.value.substring(0, field.value.indexOf('@')); 
    dominio = field.value.substring(
      field.value.indexOf('@') + 1, 
      field.value.length
    );
    if (
      usuario.length >= 1 && 
      dominio.length >= 3 &&
      usuario.search('@') == -1 &&
      dominio.search('@') == -1 &&
      usuario.search(' ') == -1 &&
      dominio.search(' ') == -1 &&
      dominio.search('.') != -1 &&
      dominio.indexOf('.') >= 1 &&
      dominio.lastIndexOf('.') < dominio.length - 1 
    ) {
        document.getElementById('oemail').style.border = "green solid 3px";
        console.log('E-mail valido');
    } else {
        document.getElementById('oemail').style.border = "red solid 3px";
        console.log('E-mail invalido');
    }

}


function valida_data(){
    var datanasc=document.getElementById("data_nasc").value;
    if(datanasc != "" && isNaN(datanasc)){
        document.getElementById('data_nasc').style.border = "green solid 3px";
    }else{
        document.getElementById('data_nasc').style.border = "red solid 3px";
    }
}



function validaTelefone(){
    var numeroTel=document.getElementById("telefone").value;
    if(numeroTel == "" || numeroTel.length < 10 || numeroTel.length > 11 || isNaN(numeroTel)){
        document.getElementById('telefone').style.border = "red solid 3px";
        alert("Insira somente números")
    }else{
        document.getElementById('telefone').style.border = "green solid 3px";
    }

}

function validaCep(){
    var numerocep=document.getElementById("cep").value;
    if(numerocep == "" || numerocep.length != 8 || isNaN(numerocep) || numerocep == "00000000" || numerocep == "11111111" || numerocep == "22222222"){
        document.getElementById('cep').style.border = "red solid 3px";
    }else{
        document.getElementById('cep').style.border = "green solid 3px";
    }

}




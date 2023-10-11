function validarFormulario() {

    var valorA = parseInt(document.getElementById("campoA").value);
    var valorB = parseInt(document.getElementById("campoB").value);
    
    if (isNaN(valorA) || isNaN(valorB) || valorB <= valorA) {
        mensagem.innerHTML = "O valor de B deve ser maior que o valor de A.";
        mensagem.className = "negativo";
        return false;
    } else {
        mensagem.innerHTML = "Formulário válido!";
        mensagem.className = "positivo";
        return true;
    }
}
function idade(){
    let nome = document.getElementById("nome").value;
    let n1 = parseFloat(document.getElementById("num1").value);
    let faxa = "bebê"
    if (n1 >= 5){
        faxa = "criança"
    }
    if (n1>=10){
        faxa = "adolescente"
    }
    if (n1>=20){
        faxa = "adulto"
    }
    if (n1>=60){
        faxa = "idoso"
    }
    document.getElementById("resultado").textContent = nome + " é " + faxa;
}
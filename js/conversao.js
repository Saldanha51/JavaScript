function converter(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let conversao =  (n1*9/5) + 32;
    document.getElementById("resultado").textContent = "Fahrenheit: " + conversao;
}
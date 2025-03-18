function conta(){
    let n1 = parseFloat(document.getElementById("num1").value);
    if (n1 % 2 == 0){
        document.getElementById("parimpar").textContent = n1 + " é Par";
    }
    else{
        document.getElementById("parimpar").textContent = n1 + " é Ímpar";
    }
    
}
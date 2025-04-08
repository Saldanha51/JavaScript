function consultarCEP(){
    const cep = document.getElementById("cep").value;

    if(!cep) {
        alert("Por favor, insira um CEP");
        return;
    }

    fetch('https//viacep.com.br/ws/${cep}/join/')
    .then(response => response.json())
    .then(data => {
        if (data.erro) {
            throw new Error ("CEP inválido");
        }
        document.getElementById("algo_diferente").textContent;

    })

} //TEM QUE TERMINAR
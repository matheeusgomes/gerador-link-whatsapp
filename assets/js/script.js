//MÁSCARA DO INPUT DE TELEFONE
const handlePhone = (event) => {
    const input = event.target;
    input.value = phoneMask(input.value);
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
}

//COPIAR TEXTO
function copiar() {
    const textoCopiado = document.getElementById("result");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.getElementById('btn-copiar').innerHTML = 'COPIADO!';
}

//GERAR NOVO LINK
function gerarNovoLink() {
    document.location.reload(true);
}

//GERAR LINK
function gerar() {
    let boxForm = document.getElementById('box-form');
    let boxResult = document.getElementById('box-result');
    let resultado = document.getElementById('result');
    let numero = document.getElementById('number').value;
    let link = "https://api.whatsapp.com/send?phone=55";
    let linkFinal = link + numero.replace(/\D/g, ''); //RETIRA OS CARACTERES DO NUMERO

    if (numero == '') {
        alert("Digite um número!!!");
    } else {
        boxForm.style.display = 'none';
        boxResult.style.visibility = 'visible';
        resultado.value = linkFinal;
    }
}
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
    const boxForm = document.getElementById('area1');
    const boxResult = document.getElementById('area2');
    const numero = document.getElementById('number').value;
    const resultado = document.getElementById('result');
    const link = "https://api.whatsapp.com/send?phone=55";
    var linkFinal = link + numero.replace(/\D/g, ''); //RETIRA OS CARACTERES DO NUMERO

    if (numero == '') {
        alert("Digite um número!!!");
    } else {
        boxForm.classList.add('display');
        boxResult.classList.remove('display');
        resultado.value = linkFinal;
    }

    //BOTÃO ABRIR EM NOVA ABA
    let btn = document.querySelector('#btn-abrir');
    btn.addEventListener('click', function () {
        return (window.open(linkFinal, '_blank'));
    })
}


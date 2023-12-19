const pesquisarCep = async () => {

    limparCampos();

    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    if (cepValido(cep)) {

        const dados = await fetch(url);
        const endereco = await dados.json();

        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('endereco').value = 'CEP não localizado';
        } else {
            preencherFormulario(endereco);
        }

    } else {
        document.getElementById('endereco').value = 'Digitação incorreta!';
    }
}

const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('cidade').value = endereco.localidade;
};

const cepValido = (cep) => cep.length == 8 && eNumero(cep);
const eNumero = (numero) => /^[0-9]+$/.test(numero);

const limparCampos = () => {
    document.getElementById('endereco').value = '';
    document.getElementById('cidade').value = '';
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep);

function minhaFuncao() {
    alert("Formulário enviado com sucesso!");
}

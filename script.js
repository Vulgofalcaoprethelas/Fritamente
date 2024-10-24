document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirma-senha').value;
    const termos = document.querySelector('input[name="termos"]').checked;

    if (senha !== confirmaSenha) {
        alert('As senhas não correspondem. Por favor, tente novamente.');
        return;
    }

    if (!termos) {
        alert('Você deve aceitar os Termos de Serviço.');
        return;
    }
});

let planoAtual = null;

function assinarPlano(plano) {
    if (planoAtual === null) {
        alert(`Parabéns, você assinou o plano ${plano}!`);
    } else if (planoAtual !== plano) {
        alert(`Parabéns, você atualizou seu plano para: ${plano}!`);
    } else {
        alert(`Você já assinou o plano ${plano}.`);
    }
    planoAtual = plano;
}

const botoesAssinar = document.querySelectorAll('.btn-assinar');

botoesAssinar.forEach((botao) => {
    botao.addEventListener('click', () => {
        const plano = botao.getAttribute('data-plano');
        assinarPlano(plano);
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////escrever

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}
  
const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}


const uploadSection = document.getElementById('uploadSection');
const fileInput = document.getElementById('fileInput');
const submitBtn = document.getElementById('submitBtn');
const confirmationMessage = document.getElementById('confirmationMessage');

/// Permitir arrastar e soltar arquivos
uploadSection.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadSection.style.backgroundColor = '#e0e0e0';
});

uploadSection.addEventListener('dragleave', () => {
    uploadSection.style.backgroundColor = '#fafafa';
});

uploadSection.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadSection.style.backgroundColor = '#fafafa';
    fileInput.files = e.dataTransfer.files; // Pega os arquivos arrastados
});

// Enviar arquivo (simulação)
submitBtn.addEventListener('click', () => {
    if (document.getElementById('terms').checked && fileInput.files.length > 0) {
        
        // Simula o envio de arquivos
        confirmationMessage.style.display = 'block';
    } else {
        alert('Por favor, aceite os termos e selecione um arquivo para enviar.');
    }
});
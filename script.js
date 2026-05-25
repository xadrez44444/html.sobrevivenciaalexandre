// Seleciona o botão pelo ID
const botao = document.getElementById('meuBotao');

// Adiciona um evento de clique a ele
botao.addEventListener('click', () => {
    alert('Você clicou no botão! O JavaScript está funcionando! 🚀');
    
    // Bônus: muda a cor de fundo do botão ao clicar
    botao.style.backgroundColor = '#28a745';
    botao.innerText = 'Clicado!';
});
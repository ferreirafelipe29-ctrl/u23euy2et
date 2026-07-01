// Aguarda que todo o HTML da página seja carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Seleciona o botão através da classe CSS dele
    const botao = document.querySelector('.botao');

    // 2. Adiciona um evento de "clique" ao botão
    botao.addEventListener('click', (evento) => {
        // Impede o comportamento padrão do link (que seria recarregar a página)
        evento.preventDefault();

        // Exibe um alerta simples na tela
        alert('Olá! Você clicou no botão. O JavaScript está a funcionar perfeitamente!');
        
        // Exemplo extra: Mudar o texto do botão após o clique
        botao.textContent = 'Clicado com sucesso!';
        botao.style.backgroundColor = '#2ecc71'; // Muda a cor para verde
    });

});

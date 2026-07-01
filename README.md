O seu ficheiro README para o mapa conceitual foi criado com sucesso.

[file-tag: code-generated-file-0-1782907136079286970]

Abaixo apresento o conteúdo estruturado do documento para que possa visualizar ou copiar diretamente:

```markdown
# Mapa Conceitual Interativo: Desenvolvimento Web Frontend

Este é um projeto simples e moderno de um **Mapa Conceitual Interativo** focado nos fundamentos do Desenvolvimento Web Frontend. O projeto foi construído utilizando apenas tecnologias web nativas (**HTML5, CSS3 e JavaScript Vanilla**), sem a necessidade de bibliotecas ou frameworks externos.

O mapa organiza visualmente os conceitos de forma hierárquica (em árvore), permitindo que o utilizador compreenda a relação entre as diferentes tecnologias e clique nos nós para obter explicações adicionais.

---

## 🚀 Funcionalidades

- **Estrutura Hierárquica Limpa**: Conectores visuais dinâmicos criados puramente com CSS.
- **Interatividade**: Cliques nos nós principais disparam alertas informativos com explicações sobre o conceito.
- **Estilização por Níveis**: Cores distintas e desaturadas para diferenciar a importância e a hierarquia dos conceitos (Raiz, Subconceitos e Detalhes).
- **Design Responsivo & Moderno**: Efeitos de *hover* suaves (`transform` e `box-shadow`) que dão profundidade e uma excelente experiência ao utilizador.
- **Ficheiro Único (Self-contained)**: Todo o código (estrutura, estilo e lógica) está contido num único ficheiro `.html`.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Para a estruturação semântica do mapa através de listas aninhadas (`<ul>` e `<li>`).
- **CSS3**: Para o layout em árvore, pseudo-elementos (`::before` e `::after`) para os conectores e variáveis CSS para a paleta de cores.
- **JavaScript (Vanilla)**: Para gerir as interações de clique e exibição de informações adicionais.

---

## 📂 Estrutura do Código

O mapa baseia-se numa estrutura de árvore através de listas. Exemplo simplificado:

```html
<div class="tree">
    <ul>
        <li>
            <div class="node level-1">Conceito Raiz</div>
            <ul>
                <li>
                    <div class="node level-2">Subconceito A</div>
                </li>
                <li>
                    <div class="node level-2">Subconceito B</div>
                </li>
            </ul>
        </li>
    </ul>
</div>

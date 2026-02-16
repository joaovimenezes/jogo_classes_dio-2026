# Classes de Um Jogo 🏹

Projeto de criação de Classe para um Objeto, desenvolvido para o bootcamp "Blip - Lógica de Programação".

### Objetivo
O objetivo do desafio era a criação de uma classe genérica que representasse um herói (objeto) com as propriedades de nome, idade e tipo. Posteriormente, utilizando método, deveria ser apresentado um ataque do personagem com diferentes tipos de armas de acordo com o seu tipo. Para saída, era necessária uma mensagem com a concatenação do tipo do herói e a arma utilizada.

### Elaboração ✅
Foi realizada a criação da classe `Hero` para a construção do objeto com as propriedades `name`, `age` e `type`. Além disso, criou-se um método `attack` com uma function dentro da classe, utilizado uma biblioteca com os tipos possíveis do herói e a arma correspondente, além de uma estrutura de decisão `if, else` para possíveis ausências de tipo. Minha opção por uma biblioteca `classes -> arma` foi baseada principalmente pela possibilidade de fácil ampliação.

### `Type`
Para a propriedade `type`, existem correspondentes para:
- "guerreiro";
- "mago";
- "monge";
- "ninja";
- "goat".

### Como executar o código
- Certifique-se de ter o Node.js para execução;
- Na variável `heroi`, defina o objeto passando os parâmetros: new Hero("name", age, "type");
- Execute o comando "node index.js" no terminal da sua IDE.
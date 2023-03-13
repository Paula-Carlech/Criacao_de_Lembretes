Premissas assumidas
- A aplicação foi feita em HTML, CSS e JavaScript.
Assumi a premissa que não há necessidade de desenvolver autenticação e que o usuário estará logado no sistema.
Decidi executar esse projeto de forma mais simples e intuitiva, porém totalmente funcional utilizando os conhecimentos que tenho em desenvolvimento web. A página possui todas as funcionalidades solicitadas e possui um tratamento de erros caso o usuário insira algum dado incorreto. Também optei por fazer uma página responsiva caso o usuário queira usar o site em outros dispositivos.

Decisões de projeto
- O projeto foi desenvolvido de forma que o usuário consiga entender de forma simples como utilizar a ferramenta proposta. Segui todas as instruções que me foram passadas. 
A respeito do código, foi criado um HTML simples, porém semântico com toda a estrutura necessária para construção do projeto. Logo após utilizei o JavaScript para dar funcionalidade a aplicação que foi implementada de forma que o avaliador possa entender com clareza, utilizei nomenclaturas relacionadas às funções que o código irá realizar e acrescentei comentários ao código para facilitar mais ainda o entendimento do mesmo. Também foram feitas verificações ao decorrer do desenvolvimento do projeto para saber se as informações inseridas pelo usuário são válidas e tratamento de erro para que ele possa entender quais são as informações que são aceitas.
Sobre o CSS, foi criado um arquivo reset.css para retirar a estilização padrão dos navegadores e o arquivo principal onde criei uma estilização mais simples e leve. Também criei um arquivo responsivo.css onde ajustei os layout para que fique com boa visualização em outras telas além de desktops, como celulares e tablets.

Instruções para executar o sistema
- Para executar o sistema basta clicar no link a seguir: https://paula-carlech.github.io/Criacao_de_Lembretes/, ou acessar o repositório no github para ter acesso ao código base. Segue o link do repositório: https://github.com/Paula-Carlech/Criacao_de_Lembretes.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# Criacao_de_Lembretes

Instruções gerais
- Fazer a prova na linguagem que você quiser
- A aplicação pode ser web, desktop ou console
- O código deve ser executável
- Você pode utilizar de quaisquer bibliotecas de componentes que desejar

Bônus
- Testes unitários
- Não utilizar biblioteca de componentes
- Utilização de git (Github, Gitlab, BitBucket – em repositórios públicos)
- Utilização de CSS/SCSS modules ou Styled Components

O que deve ser enviado
- Código construído
- Premissas assumidas
- Decisões de projeto
- Instruções pra executar o sistema
O que deve ser construído

Ao utilizar o sistema:
- Deverá ser possível adicionar um novo lembrete, informando o nome e a data do lembrete
o Ao clicar em “Criar”, os campo deverão ser validados seguindo as regras:
▪ O campo “Nome” deverá estar preenchido
▪ O campo “Data” deverá estar preenchido, com uma data válida, e essa data tem de estar no futuro
o Caso os valores dos campos sejam válidos, o novo lembrete deverá ser exibido na seção “Lista de lembretes”
- Deverá ser possível deletar um lembrete anteriormente adicionado, clicando no “x”
- Ao adicionar um novo lembrete, caso a sua data já exista, ele deverá aparecer dentro da lista referente àquele dia; caso não, um novo dia deverá ser exibido, contendo aquele novo dia
- Os dias da lista de lembretes deverão ser exibidos em ordem cronológica

Critérios de avaliação
- Qualidade do código
o Separação de responsabilidades, leitura, nomeação de variáveis e métodos, orientação a objetivos
o Clareza e legibilidade
- Utilização de HTML semântico
- [Bônus] Utilização de pré/pós processadores de CSS
- [Bônus] Criação da API seguindo os padrões RESTful
o Bons nomes de rotas, utilização correta de métodos e status HTTP
- [Bônus] Testes automatizados unitários, tanto no front-end quanto no back-end
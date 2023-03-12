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
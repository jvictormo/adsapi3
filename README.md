# adsapi3
BackEnd for the API of 3 semester of ADS in Fatec SJC

-> Alguns detalhes importantes:
-migratios: são comandos que automatizam a criação de tabelas para quando se está trabalhando em mais de uma máquina
    -npm run migration:create --migrationame=NOME_DA_MIGRATION -> cria um novo arquivo de migration
    -npm run migration:revert -> reverte todas as tabelas que possuem migration
    -npm run migration:run -> roda todas as migrations, criando as tabelas específicas

-a arquitetura e a lógica do backend funciona da seguinte maneira:
    -lado do backend:
        1°: a migration é criada para poder manter a database atualizada com as novas tabelas;
        2°: entities é a forma que criamos uma classe para cada tabela da database para podermos manipular dados (alterar, cadastrar, apagar, etc.);
        3°: services são propriamente funções que implementam a requisição do usuário (cadastrar, por exemplo);
        4°: controllers são a lógica pela qual executamos o que o usuário pede e, também, onde é feito o tratamento de erros;
        5°: routes são as rotas pela qual a informação passa da aplicação web para o seu backend
        
        Exemplo: Criar uma tabela para registrar líderes. Primeiro é feita e executada a migration para poder existir a nova tabela na database. Depois são criadas as entity para ter acesso a esta tabela e manipulá-la com o código. Em seguida, é feito o service que pega a entity criada para poder fazer o registro do líder. Após, o controller é criado, fazendo a 'ponte' entre o recebimento do dado e toda a sua interação com o código do backend. Por fim, é criada uma route para poder ter um canal em que a informação é enviada ou recebida.

    -lado do usuário: Ele clica no botão de cadastrar e as informações são passadas atráves da rota criada. Ela, então, passa a informação para os controllers, que chamam o service (funções) para executar o registro. O service resgata a entity e por fim faz o registro
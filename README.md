# learning nodeJS

* Para iniciar: npm init -y

* Instalando a dependência express: npm install express 
  * O express é uma depêndencia do servidor para criar e adicionar rotas e views, desta forma podemos trabalhar utilizando portas do servidor local.

* Instalando o nodemon: npm install -D nodemon
  * O nodemon é uma depêndencia de desenvolvimento para podermos visualizar os resultados no navegador de forma mais rápida sem ter que interromper o servidor e iniciar novamente.


* Instalando o mongoDB (Requisitos)
  * Para instalar o mongoDB você pode utilizar o docker como container e realizar o comando *docker pull mongo*, assim o docker fará o dowload do mongo em sua maquina, caso não houver instalado.
  * Use o comando docker run para executar o container 
  * *docker run --name mongodb -p 27017:27017 -d mongo* (caso use o docker toolbox ou de algum erro tente utilizar o ip *192.168.99.100* padrão para o docker toolbox) 
  * docker ps para visualizar os containers que estão em execução
  * docker start *name* para containers já nomeados

# instalando o mongoose  

  * npm install mongoose em seu projeto (um orm para bancos não relacionais)

  * Um orm (Object, Relational, Mapping) incapsula a lógica do banco de dados através do código, ou seja, ao invés de utilizarmos querys ou a linguagem da base de dados, nós utilizamos, nesse caso, apenas a linguagem javascript para manipular o banco de dados.


  
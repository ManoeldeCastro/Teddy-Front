Teddy-Front
<h1 align="center">Teddy Single-Spa</h1>
Descrição
Plataforma desenvolvida com React, Angular e Single-Spa, projetada para a gestão de parceiros e empresas externas. O projeto utiliza a arquitetura de micro-frontends para organizar os diferentes módulos, proporcionando uma interface escalável e modular.

Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

Node.js
Yarn
Git
Rodar o projeto principal
bash
Copiar código
# Clone o repositório
$ git clone https://github.com/edusdorneles/teddy-single-spa.git

# Acesse a pasta do projeto no terminal
$ cd teddy-single-spa

# Acesse a pasta root
$ cd root

# Instale as dependências
$ yarn

# Inicie o projeto
$ yarn start

# O servidor iniciará na porta: 9000
# Acesse http://localhost:9000/
Rodar o módulo de LOGIN
bash
Copiar código
# Acesse a pasta app-login
$ cd app-login

# Instale as dependências
$ yarn

# Inicie o módulo de login
$ yarn serve

# O servidor iniciará na porta: 9001
# Acesse http://localhost:9000/login
Rodar o módulo de DASHBOARD
bash
Copiar código
# Acesse a pasta app-dashboard
$ cd app-dashboard

# Instale as dependências
$ yarn

# Inicie o módulo de dashboard
$ yarn start

# O servidor iniciará na porta: 9002
# Acesse http://localhost:9000/dashboard
Acessar a Dashboard sem instalar o módulo de Login
Caso não queira instalar o módulo de login, você pode simular um usuário autenticado diretamente no navegador.

bash
Copiar código
# No seu navegador, acesse http://localhost:9000 e abra o console de desenvolvedor (F12 ou Ctrl+Shift+I)
# Acesse a aba "Console" e execute o seguinte comando para adicionar um cookie de usuário:
$ document.cookie = "@teddy/user-name=DASHBOARD";

# Agora acesse diretamente a Dashboard:
# Acesse http://localhost:9000/dashboard
Pendências
Aqui estão algumas tarefas pendentes e estimativas de tempo para conclusão:

Responsividade: Adaptar o layout para dispositivos móveis (meio dia).
Adicionar testes unitários: Cobertura de testes nos principais componentes (meio dia).
Containerização: Preparar o projeto para rodar em containers Docker (1 dia).
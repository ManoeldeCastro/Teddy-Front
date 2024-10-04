Teddy Single-Spa
Plataforma desenvolvida com React, Angular e Single-Spa, projetada para a gestão de parceiros e empresas externas. O projeto utiliza a arquitetura de micro-frontends para organizar os diferentes módulos, proporcionando uma interface escalável e modular.

Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

Node.js
Yarn
Git
Rodando o projeto principal
Copie e cole o código abaixo para rodar o projeto principal:
# Clone o repositório
git clone https://github.com/edusdorneles/teddy-single-spa.git && cd teddy-single-spa

# Acesse a pasta root, instale as dependências e inicie o projeto
cd root && yarn && yarn start

O servidor iniciará na porta 9000. Acesse: http://localhost:9000

Rodando o módulo de Login
Copie e cole o código abaixo para rodar o módulo de Login:
# Acesse a pasta do módulo de login, instale as dependências e inicie o módulo
cd app-login && yarn && yarn serve

Aqui está a versão revisada do seu README, com comandos prontos para copiar e colar, deixando o processo mais direto:

Teddy Single-Spa
Plataforma desenvolvida com React, Angular e Single-Spa, projetada para a gestão de parceiros e empresas externas. O projeto utiliza a arquitetura de micro-frontends para organizar os diferentes módulos, proporcionando uma interface escalável e modular.

Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

Node.js
Yarn
Git
Rodando o projeto principal
Copie e cole o código abaixo para rodar o projeto principal:


Copiar código
# Clone o repositório
git clone https://github.com/edusdorneles/teddy-single-spa.git && cd teddy-single-spa

# Acesse a pasta root, instale as dependências e inicie o projeto
cd root && yarn && yarn start
O servidor iniciará na porta 9000. Acesse: http://localhost:9000

Rodando o módulo de Login
Copie e cole o código abaixo para rodar o módulo de Login:

Copiar código
# Acesse a pasta do módulo de login, instale as dependências e inicie o módulo
cd app-login && yarn && yarn serve
O servidor iniciará na porta 9001. Acesse: http://localhost:9000/login

Rodando o módulo de Dashboard
Copie e cole o código abaixo para rodar o módulo de Dashboard:
# Acesse a pasta do módulo de dashboard, instale as dependências e inicie o módulo
cd app-dashboard && yarn && yarn start
O servidor iniciará na porta 9002. Acesse: http://localhost:9000/dashboard

Acessando a Dashboard sem instalar o módulo de Login
Caso não queira instalar o módulo de login, você pode simular um usuário autenticado diretamente no navegador:

No navegador, acesse http://localhost:9000
Abra o console de desenvolvedor (F12 ou Ctrl+Shift+I)
Acesse a aba "Console" e cole o código abaixo para adicionar um cookie de usuário:
document.cookie = "@teddy/user-name=DASHBOARD";

Agora acesse diretamente a Dashboard: http://localhost:9000/dashboard

Pendências
Aqui estão algumas tarefas pendentes e estimativas de tempo para conclusão:

Responsividade: Adaptar o layout para dispositivos móveis (1 dia)
Adicionar testes unitários: Cobertura de testes nos principais componentes (1 dia)
Containerização: Preparar o projeto para rodar em containers Docker (2 dias)
Deploy na Vercel: Configurar o ambiente de produção e realizar o deploy na Vercel (2 dias)

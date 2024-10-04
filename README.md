## Absolutamente! Aqui está o README formatado em uma única string para facilitar a cópia:

```markdown
## Teddy Single-Spa

**Plataforma modular para gestão de parceiros e empresas externas.**

### Visão geral
O Teddy Single-Spa é um projeto que utiliza a arquitetura de micro-frontends para criar uma interface escalável e modular para a gestão de parceiros e empresas externas. Essa abordagem permite que diferentes equipes trabalhem em módulos independentes, acelerando o desenvolvimento e facilitando a manutenção.

### Arquitetura
[Insira um diagrama aqui, por exemplo, um diagrama UML de componentes ou um diagrama de sequência que mostre a interação entre os micro-frontends e o shell]


### Tecnologias utilizadas
* **Framework:** React, Angular
* **Orquestrador:** Single-Spa
* **Gerenciador de pacotes:** Yarn

### Pré-requisitos
* Node.js (v16 ou superior)
* Yarn
* Git

### Instalação
1. Clone o repositório:
```bash
   git clone [https://github.com/ManoeldeCastro/Teddy-Front.git](https://github.com/ManoeldeCastro/Teddy-Front.git)
```
2. Instale as dependências:
```bash
   cd teddy-single-spa
   yarn
```

### Rodando os módulos
#### Projeto principal
```bash
cd root
yarn start
```
Acesse: http://localhost:9000

#### Módulo de Login
```bash
cd app-login
yarn serve
```
Acesse: http://localhost:9001


### Contribuindo
Para contribuir com o projeto, siga estes passos:
1. Fork o repositório
2. Crie um novo branch
3. Faça suas alterações
4. Envie um pull request



### Histórico de versões
* v1.0.0 - Versão inicial

### Pendências
* **Responsividade:** Adaptar o layout para dispositivos móveis (1 dia)
* **Testes unitários:** Cobertura de testes nos principais componentes (1 dia)
* **Containerização:** Preparar o projeto para rodar em containers Docker (2 dias)
* **Deploy na Vercel:** Configurar o ambiente de produção e realizar o deploy na Vercel (2 dias)
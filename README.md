```markdown
## Teddy Single-Spa

### Descrição:
Plataforma desenvolvida com React, Angular e Single-Spa para gestão de parceiros e empresas externas.

### Rodar o projeto:
```bash
# Clone o repositório
git clone [https://github.com/ManoeldeCastro/Teddy-Front.git](https://github.com/ManoeldeCastro/Teddy-Front.git)
# Acesse a pasta do projeto no terminal
cd Teddy-Front
# Acesse a pasta root
cd root
# Instale as dependências
yarn
# Inicie o projeto
yarn start
# O servidor iniciará na porta: 9000. Acesse http://localhost:9000/
```

### Rodar o módulo Login:
```bash
# Acesse a pasta app-login
cd app-login
# Instale as dependências
yarn
# Inicie o projeto
yarn serve
# O servidor iniciará na porta: 9001. Acesse http://localhost:9000/login
```

### Rodar o módulo Dashboard:
```bash
# Acesse a pasta app-dashboard
cd app-dashboard
# Instale as dependências
yarn
# Inicie o projeto
yarn start
# O servidor iniciará na porta: 9002. Acesse http://localhost:9000/dashboard
```

**Caso você não queira instalar a aplicação de login:**

  * No seu navegador, acesse http://localhost:9000 e abra o inspecionar
  * Acesse a aba "Console"
  * Adicione um usuário aos cookies:

```javascript
document.cookie = "@teddy/user-name=DASHBOARD";
```

  * Acesse http://localhost:9000/dashboard

### Tecnologias utilizadas
* **Framework:** React, Angular
* **Orquestrador:** Single-Spa
* **Gerenciador de pacotes:** Yarn

### Pré-requisitos
* Node.js (v16 ou superior)
* Yarn
* Git

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
```

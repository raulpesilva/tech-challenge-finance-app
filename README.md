# Bytebank | FIAP Tech Challenge

## Contexto do projeto

Este projeto é uma aplicação de gerenciamento financeiro desenvolvida como parte de um desafio técnico da FIAP Tech, utilizando Next.js. O objetivo é permitir que os usuários gerenciem suas transações financeiras de forma intuitiva e eficiente.

&nbsp;

## Tecnologias utilizadas

### Front-end

Next.js: Framework React para construção de aplicações web, permitindo renderização do lado do servidor (SSR) e geração de sites estáticos (SSG).

React: Biblioteca JavaScript para construção de interfaces de usuário.

Material-UI: Biblioteca de componentes React que implementa o Material Design, proporcionando uma interface consistente e responsiva.

Sass: Pré-processador CSS que facilita a escrita de estilos com recursos como variáveis e aninhamento.

Recharts: Biblioteca de gráficos para React, facilitando a criação de visualizações de dados interativas.

Day.js: Biblioteca leve para manipulação de datas, facilitando operações relacionadas a datas e horários.

Re-State: Biblioteca para gerenciamento de estado global.

&nbsp;

### Back-end e segurança

JSON Server: Ferramenta que simula uma API RESTful a partir de um arquivo JSON, permitindo testes e desenvolvimento sem a necessidade de um servidor back-end completo.

bcrypt: Biblioteca para hashing de senhas, utilizada para proteger informações sensíveis.

Jose: Biblioteca para manipulação de tokens JWT (JSON Web Tokens), que pode ser utilizada para autenticação e autorização.

&nbsp;

### Documentação e qualidade de código

Storybook: Ferramenta de desenvolvimento para criar e documentar componentes UI isoladamente, facilitando a visualização e teste dos mesmos.

ESLint: Ferramenta de linting para identificar e corrigir problemas no código.

Prettier: Formatador de código para manter a consistência e padronização.

&nbsp;

### Ferramentas de desenvolvimento

TypeScript: Superconjunto tipado do JavaScript, trazendo mais segurança ao código durante o desenvolvimento.

Concurrently: Utilitário que permite rodar múltiplos scripts ao mesmo tempo, como iniciar o servidor mock e o ambiente de desenvolvimento simultaneamente.

&nbsp;

## Como Executar o Projeto

### Variáveis de ambiente

Para executar a aplicação, é preciso criar um arquivo `.env` seguindo o `.example.env` localizado na raiz do projeto

Além do .env, faça uma cópia do arquivo `example.db.json` para um arquivo `db.json` localizado dentro de `src/mock/server`

&nbsp;

### Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

```shell
git clone https://github.com/raulpesilva/tech-challenge-finance-app.git
```

2. Instale as dependências:

```shell
pnpm install
```

3. Inicie o mock e o projeto:

```shell
pnpm dev:mock
```

4. Acesse a aplicação no navegador em http://localhost:3000/

&nbsp;

### Para o StoryBook, siga os passos abaixo:

1. Para acessar o StoryBook, inicie o mock e a documentação:

```shell
pnpm storybook:mock
```

2. Acesse a documentação no navegador em http://localhost:6006/

### Docker

```shell
docker compose up
```

&nbsp;
&nbsp;

#### Nota:

necessário rodar o MFE também
&nbsp;
https://github.com/raulpesilva/tech-challenge-finance-app-mfe

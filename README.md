# Letmeask Agents - Server

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)
![Google Gemini](https://img.shields.io/badge/google%20gemini-8E75B2?style=for-the-badge&logo=google%20gemini&logoColor=white)

Este projeto é a API RESTful da plataforma **Letmeask Agents**, responsável por processar e armazenar perguntas e respostas em tempo real com suporte à **inteligência artificial generativa (IA)**.

A aplicação é responsável por fazer:

- Upload de áudios
- Transcrição via **Gemini AI**
- Geração de textos via similaridade com **embeddings vetoriais**
- Respostas contextuais com base no conteúdo.

<p align="center">
    <kbd>
        <img src="./.github/image01.png" style="border-radius: 5px" alt="Exemplo de execução" width="1000px">
    </kbd>
</p>

<p align="center">
    <kbd>
        <img src="./.github/image02.png" style="border-radius: 5px" alt="Exemplo de execução" width="1000px">
    </kbd>
</p>

Link do repositório da aplicação Frontend: [Letmeask Agents - Web](https://github.com/Brendon3578/Letmeask-Agents-web)

## 🔮 Descrição do Projeto

Letmeask Agents é uma plataforma web de perguntas e respostas (Q&A) voltada para o ambiente educacional. Ela permite que autores criem salas interativas, compartilhem áudios explicativos sobre um conteúdo e recebam perguntas dos participantes.

O grande diferencial do projeto é a integração com a IA generativa Gemini, que transcreve os áudios enviados, gera representações vetoriais (embeddings) e, com base nisso, fornece respostas automáticas e contextuais para as perguntas feitas nas salas.

Ele também serve como uma aplicação prática para explorar conceitos como:

- Transcrição e compreensão de linguagem natural (NLU)
- Uso de IA generativa para educação
- Banco de dados vetoriais e embeddings
- Arquitetura moderna full-stack escalável
- Ideal para instituições, cursos online e qualquer cenário que envolva ensino com sessões gravadas.

## ⚙️ Funcionalidades da Aplicação

- **Criação de Salas**: Permite que autores criem salas públicas ou privadas para organizar conteúdos e interações.
- **Postagem de Perguntas**: Usuários podem fazer perguntas dentro de cada sala, relacionadas ao conteúdo apresentado.
- **Respostas Manuais e por IA**: O autor pode responder perguntas manualmente, ou contar com uma resposta automática gerada pela IA.
- **Upload de Áudios**: O autor pode enviar áudios explicativos sobre o conteúdo apresentado na aula.
- **Transcrição com Gemini AI**: Os áudios enviados são transcritos automaticamente usando o modelo de linguagem da Google.
- **Geração de Embeddings**: Os textos transcritos são convertidos em vetores para consultas rápidas e contextuais.
- **Respostas Contextuais por IA**: As perguntas dos usuários são respondidas com base nos embeddings criados a partir dos áudios, proporcionando respostas mais precisas e contextualizadas.
- **Gerenciamento de Banco de Dados**: Utiliza PostgreSQL e Drizzle ORM para operações relacionais e armazenamento seguro.

---

## 🧰 Tecnologias Utilizadas

- [Fastify](https://www.fastify.io/) - Framework Node.js altamente performático para construção de APIs RESTful.
- [Node.js](https://nodejs.org/) - Ambiente de execução para JavaScript no servidor.
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional robusto e confiável.
- [Drizzle ORM](https://orm.drizzle.team/) - ORM TypeScript para manipulação segura e tipada de banco de dados.
- [Google Generative AI (Gemini API)](https://ai.google.dev/) - API de inteligência artificial da Google para transcrição e geração de conteúdo.
- [Zod](https://zod.dev/) - Biblioteca para validação e tipagem de esquemas em TypeScript.
- [Biome.js](https://biomejs.dev/) - Linter e formatter para código JavaScript/TypeScript moderno.
- [UltraCite](https://github.com/ultracite/ultracite) - Ferramenta complementar ao Biome para padronização de projetos.

---

## 🚀 Como Executar

### 1. Clonar o Repositório

```bash
git clone https://github.com/Brendon3578/letmeask-agents.git

cd letmeask-agents/server
```

### 2. Instalar as Dependências

```bash
npm install
```

### 3. Configurar Banco de Dados Postgre

A aplicação exige um banco PostgreSQL com suporte à extensão pgvector para armazenar embeddings gerados pela IA. Você pode configurar de três maneiras:

1. Usando Docker Compose (recomendado para testes locais)

    Crie um arquivo docker-compose.yaml com o seguinte conteúdo:

    ```yaml
    services:
      nlw-agents-pg:
        image: pgvector/pgvector:pg17
        environment:
          POSTGRES_USER: docker
          POSTGRES_PASSWORD: docker
          POSTGRES_DB: docker
        ports:
          - "5432:5432"
        volumes:
          - ./docket/setup.sql:docker-entrypoint-initdb.d/setup.sql
    ```

1. Usando PostgreSQL Localmente (sem Docker)

    Você pode instalar o PostgreSQL em sua máquina (versão 14 ou superior com suporte à extensão pgvector) e criar manualmente o banco de dados, usuário e extensão:

    ```SQL
    CREATE DATABASE letmeask;
    CREATE EXTENSION IF NOT EXISTS vector;
    ```

1. Usando [Supabase](https://supabase.com/) (hospedagem online)

    Você pode também criar um projeto no Supabase, habilitar a extensão pgvector e copiar a URL de conexão.Este foi o método utilizado no desenvolvimento do projeto.

> [!WARNING]
> Após criar o banco, preencha corretamente as variáveis no arquivo .env com os dados de conexão (exemplo: DATABASE_URL=postgres://...).

### 4. Executar o Projeto

```bash
# Para ambiente de produção
npm start

# Para ambiente de desenvolvimento
npm run dev

```

Também é possível usar os seguintes scripts:

- `npm run db:seed`: Executa o seed de dados no banco, útil para popular com dados iniciais.
- `npm run db:generate`: Gera as migrações do banco com base nas mudanças no schema.
- `npm run db:migrate`: Aplica as migrações pendentes no banco de dados.
- `npm run db:studio`: Abre uma interface visual para navegar no banco com Drizzle Studio.

> [!TIP]
> Não esqueça de configurar o arquivo `.env` com as variáveis necessárias antes de rodar os scripts, pegue como exemplo o arquivo `example.env`.

É possível testar também as rotas do projeto via arquivo [client.http](./client.http) com a extensão REST Client do Visual Code

---

<h3 align="center">
    Projeto feito com ☕ por <a href="https://github.com/Brendon3578">Brendon Gomes</a> durante a NLW Agents
</h3>

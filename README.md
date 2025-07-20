# Letmeask Agents — Server

Este projeto é a API RESTful da plataforma **Letmeask Agents**, responsável por processar e armazenar perguntas e respostas em tempo real com suporte à **inteligência artificial generativa (IA)**.

A aplicação é responsável por fazer:

- Upload de áudios
- Transcrição via **Gemini AI**
- Geração de textos via similaridade com **embeddings vetoriais**
- Respostas contextuais com base no conteúdo.

---

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

### 3. Executar o Projeto

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

> [!WARNING]
> Não esqueça de configurar o arquivo `.env` com as variáveis necessárias antes de rodar os scripts, pegue como exemplo o arquivo `example.env`.

---

<h3 align="center">
    Feito com ☕ por <a href="https://github.com/Brendon3578">Brendon Gomes</a>
</h3>

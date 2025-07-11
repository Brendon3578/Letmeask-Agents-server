# NLW Agents - Server

Este projeto é o backend da aplicação "NLW Agents", desenvolvido durante o evento Next Level Week (NLW) da Rocketseat.

## Tecnologias Utilizadas

A API foi construída utilizando um conjunto de tecnologias modernas e performáticas para garantir escalabilidade e manutenibilidade.

- **Node.js:** Ambiente de execução JavaScript no servidor.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática ao código.
- **Fastify:** Framework web focado em alta performance e baixo overhead.
- **Drizzle ORM:** ORM (Object-Relational Mapper) moderno e seguro para interagir com o banco de dados.
- **Zod:** Biblioteca para declaração e validação de esquemas de dados.

## Configuração do Projeto

Siga os passos abaixo para configurar e executar o projeto em seu ambiente de desenvolvimento.

1. **Instale as dependências:**

    ```bash
    npm install
    ```

2. **Configure as variáveis de ambiente:**  
    Copie o arquivo de exemplo `.env.example` e renomeie para `.env`. Em seguida, preencha as variáveis com as suas credenciais, especialmente as do banco de dados.

    ```bash
    cp .env.example .env
    ```

3. **Execute as migrações do banco de dados:**  
    Este comando aplicará todas as migrações pendentes e criará as tabelas necessárias no seu banco de dados.

    ```bash
    npm run drizzle-kit migrate
    ```

4. **Inicie o servidor:**

    ```bash
    npm run dev
    ```

## Scripts Úteis

- `npm run dev`: Inicia o servidor em modo de desenvolvimento com hot-reload.
- `npx drizzle-kit generate`: Gerar o schema do banco
- `npx drizzle-kit migrate`: Aplica as migrações do banco de dados.
- `npx drizzle-kit studio`: Abre a interface web do Drizzle Studio para inspecionar e gerenciar o banco de dados.

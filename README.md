# FichaÁgil - API - v0.1

API desenvolvida para atender à instituição Itaka Escolápios, proporcionando uma plataforma para gerenciamento de informações de candidatos e suas respectivas situações trabalhistas, raciais/étnicas, estado civil, moradia, escolaridade, parentesco, e outros dados pertinentes.

## Estrutura do Projeto

O projeto está organizado da seguinte simplificada forma:

```
itaka-project-api/
├─ src/
│  ├─ app/
│  │  ├─ controllers/
│  │  ├─ middlewares/
│  │  ├─ repositories/
│  │  └─ utils/
│  ├─ database/
│  ├─ routes.js
│  └─ index.js
├─ .env
└─ package.json
```

## Configuração Inicial

Para executar este projeto localmente, siga as instruções abaixo:

### Pré-requisitos

- Node.js
- NPM ou Yarn
- Banco de dados MySQL de desenvolvimento

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Wookyse/itaka-project-api.git
cd itaka-project-api
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente criando um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
JWT_SECRET=sua_chave_secreta
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=nome_do_banco
```

4. Execute a aplicação:

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará rodando no endereço `http://localhost:8000`.

## Rotas da API

A API define as seguintes rotas:

### Autenticação
- POST `/login` - Autenticação de usuários
- POST `/logout` - Logout de usuários

### Usuários
- POST `/createUser` - Criação de novos usuários
- GET `/users` - Listagem de usuários
- GET `/user` - Obter um usuário específico
- PUT `/updateUser` - Atualização de dados de um usuário

### Fichas de Candidatos
- POST `/createFichaCandidato` - Criação de ficha de candidato
- GET `/fichas` - Listagem de todas as fichas
- GET `/ficha` - Obter uma ficha pelo ID
- PUT `/updateFicha` - Atualização de uma ficha de candidato
- DELETE `/deleteFicha` - Deletar uma ficha de candidato


## Contribuições

Contribuições de novos contribuidores são bem-vindas! Essas serão controladas por professores e antigos contribuidores! Para contribuir, por favor, crie um fork do projeto, faça suas alterações e submeta um pull request.

## Contato

- Guilherme Coelho Vieira - guilherme.coelho@univale.br - [LinkedIn](https://www.linkedin.com/in/guilherme-coelho-vieira-601711220)
- João Vitor Coelho Lima - joao.coelho@univale.br - [LinkedIn](https://www.linkedin.com/in/jo%C3%A3o-vitor-coelho-9b2149231)
- Lucas Fernandes Ferreira de Almeida - lucas.almeida1@univale.br - [LinkedIn](https://www.linkedin.com/in/lucasffa)

---

- Link do Projeto - [https://github.com/Wookyse/itaka-project-api](https://github.com/Wookyse/itaka-project-api)

---

API do sistema FichaÁgil criado pela equipe Technamina (2022, 2023), alunos da Univale, na disciplina curricular Projeto Integrador.

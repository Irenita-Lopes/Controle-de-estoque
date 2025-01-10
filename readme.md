# Controle de Estoque API

Este projeto é uma API RESTful para gerenciar um sistema de controle de estoque. A aplicação permite a adição, listagem, busca, atualização e exclusão de produtos de um inventário armazenado em um arquivo JSON. Além disso, oferece uma rota de **status** para verificar se a API está funcionando corretamente.

## Funcionalidades

A API oferece as seguintes funcionalidades:

- **Status da Aplicação**: Retorna uma mensagem indicando que a API está funcionando corretamente.
- **Listar Produtos**: Retorna todos os produtos ou filtra por categoria.
- **Adicionar Produto**: Permite adicionar um novo produto ao inventário.
- **Buscar Produto**: Permite buscar um produto por `id` ou `name`.
- **Atualizar Produto**: Permite atualizar as informações de um produto existente.
- **Excluir Produto**: Permite excluir um produto do inventário.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework para criar servidores web e APIs RESTful.
- **UUID**: Gerador de identificadores únicos (UUID) para garantir IDs únicos para os produtos.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **fs (File System)**: Módulo nativo do Node.js para ler e escrever arquivos.
- **http-status-codes**: Biblioteca que oferece constantes de códigos de status HTTP.
- **ts-node-dev**: Ferramenta para desenvolvimento com TypeScript de recarga dinâmica.

## Pré-Requisitos

- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes do Node.js)
- **Git** (opcional, para clonagem do repositório)

## Como Rodar a Aplicação Localmente

### Passo 1: Clonar o Repositório

Se você ainda não fez, clone este repositório para a sua máquina:

```bash
git clone https://github.com/
cd controle-de-estoque
```

### Passo 2: Instalar Dependências

Instale as dependências do projeto com o `npm`:

```bash
npm install
```

### Passo 3: Rodar o Servidor

Para rodar o servidor em modo de desenvolvimento (com recarga automática):

```bash
npm run dev
```

A aplicação estará rodando em `http://localhost:3000`.

### Passo 4: Testar a API

Você pode testar a API utilizando ferramentas como o **Postman** ou **Insomnia**. Abaixo estão os exemplos de endpoints disponíveis:

#### **Status da Aplicação**

- **URL**: `GET /status`
- **Descrição**: Retorna uma mensagem indicando que a API está funcionando corretamente.
- **Exemplo de Resposta**:
```json
"Teste de Rotas com sucesso."
```

#### **Listar Todos os Produtos**

- **URL**: `GET /products`
- **Descrição**: Retorna todos os produtos armazenados no inventário.
- **Exemplo de Resposta**:
```json
[
  {
    "id": "a7f3b60b-abe8-4bba-bb92-93b2d5d2d4a4",
    "name": "Camiseta",
    "category": "Vestuário",
    "quantity": 10,
    "price": 29.99
  },
  {
    "id": "e4a7b7f0-4a69-44a4-b7a1-3d6b7e9d7a99",
    "name": "Tênis",
    "category": "Calçados",
    "quantity": 15,
    "price": 129.99
  }
]
```

#### **Adicionar um Novo Produto**

- **URL**: `POST /products`
- **Corpo da Requisição** (exemplo):
```json
{
  "name": "Smartphone",
  "category": "Eletrônicos",
  "quantity": 30,
  "price": 1500.00
}
```

#### **Buscar Produtos por ID ou Nome**

- **URL**: `GET /products/buscar?id={id}` ou `GET /products/buscar?name={name}`
- **Exemplo de Resposta**:
```json
[
  {
    "id": "a7f3b60b-abe8-4bba-bb92-93b2d5d2d4a4",
    "name": "Camiseta",
    "category": "Vestuário",
    "quantity": 10,
    "price": 29.99
  }
]
```

#### **Atualizar um Produto**

- **URL**: `PUT /products/{id}`
- **Corpo da Requisição** (exemplo):
```json
{
  "name": "Camiseta Tamanho M",
  "category": "Vestuário",
  "quantity": 12,
  "price": 35.00
}
```

#### **Excluir um Produto**

- **URL**: `DELETE /products/{id}`
- **Exemplo de Resposta**:
```json
"Produto com ID a7f3b60b-abe8-4bba-bb92-93b2d5d2d4a4 excluído com sucesso."
```

###  Importar a Collection no Postman:
Na raiz deste projeto encontra-se o arquivo da colletion utilizada para testes.
Abra o Postman.
No canto superior esquerdo, clique no botão Import.
Uma janela será aberta. Nela, clique na opção Raw text.
Cole o conteúdo JSON copiado da sua collection no campo de texto.
Clique no botão Continue.
Agora, clique em Import.

## Estrutura de Arquivos

- **src/index.ts**: Arquivo principal que inicia o servidor Express.
- **src/router/products.router.ts**: Define as rotas relacionadas aos produtos.
- **src/router/status.routes.ts**: Define a rota de status do servidor.
- **src/services/productsService.ts**: Contém funções para ler e salvar os produtos no arquivo JSON.
- **src/utils/interfaces/IProduct.ts**: Define a interface para o produto.
- **src/utils/interfaces/IGetProduct.ts**: Define a interface para os parâmetros de busca.

## Arquivo JSON de Produtos

O inventário de produtos é armazenado em um arquivo **`products.json`**, localizado na raiz do projeto. Este arquivo será criado automaticamente na primeira vez que a aplicação for executada.

## Scripts

- **`npm run dev`**: Inicia o servidor em modo de desenvolvimento.
- **`npm run build`**: Compila o código TypeScript para JavaScript.
- **`npm run start`**: Executa a versão compilada da aplicação.

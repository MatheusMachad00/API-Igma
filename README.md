# API criada para o teste técnico da Igma

  

### Como instalar:

#### 1- Você deve executar o comando para instalar todas as dependências.
```
npm i
```

#### 2- Você deve criar um arquivo chamado .env na pasta raiz da API com as variáveis mostradas no arquivo .env-exemples. Para a URL de conexão com o PostgreSQL você deve seguir o seguinte exemplo:
```
DATABASE_URL=postgres://USERNAME:PASSWORD@HOSTNAME:YOUR_PORT/DATABASE_NAME
```

#### 3- Após a criação do arquivo .env você deve rodar o comando abaixo para criar o banco de dados.
```
npx prisma migrate dev
```

#### 4- Para subir o servidor basta executar o comando:
```
npm run dev
```

---

### Endpoints:

#### /cadastro : 
Você deve fazer uma requisição do tipo POST e enviar um objeto no formato:

    {
	    username: "fulano de tal",
	    birthdate: "01/01/2023",
	    cpf: "123.456.789-10"
	}
Observação: O campo do CPF funciona tanto com a pontuação como só com os números.

#### /usuario-por-cpf :
Você deve fazer uma requisição do tipo POST e enviar enviar um objeto no formato:

    {  
	    "cpf": "123.456.789-10"
	}
Observação: O campo do CPF funciona tanto com a pontuação como só com os números.

#### /pegar-todos-usuarios/:page :
Você deve fazer uma requisição do tipo GET e enviar junto da URL o valor da página que você deseja visualizar, caso a página não tenha nada ele irá retornar um array vazio.

    /pegar-todos-usuarios/1

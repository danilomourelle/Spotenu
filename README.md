> Status do Projeto: Em Manutenção :warning:
## Danilo Mourelle
<p align="justify">Atualmente um desenvolverdor Web Fullstack (NodeJS), tenho 3 anos de experiência em programação de robôs industriais, onde desenvolvi habilidade na área de programação de linguagens de alto nível e lógica de programação. Também fiz parte, por 4 anos, de um grupo de pesquisa científica em sistemas neurais com foco em memória, aprendizado e Doença de Alzheimer onde obtive familiaridade com documentações em lingua inglesa e a repetibilidade de protocolos pré-estabelecidos.</p>

**Canais de comunicação**:
- [Linkedin](https://www.linkedin.com/in/danilomourelle/)
- [Github](https://github.com/danilomourelle)
- <danilomourelle@outlook.com>

## Labenu | Full-Stack Web Development Bootcamp
Desenvolvimento de aplicações completas, incluindo frontend Web com React e backend com Node.js.

[![Screenshot_1](https://raw.githubusercontent.com/danilomourelle/Whats4/master/Lbn.png)](https://www.labenu.com.br/)

# Spotenu

<br>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/danilomourelle/Spotenu">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/danilomourelle/Spotenu">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/danilomourelle/Spotenu">

  <a href="https://github.com/danilomourelle/Spotenu/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/danilomourelle/Spotenu">
  </a>
</p>
<br>

#### Escopo do Projeto

<p align="justify">Esse projeto foi um dos primeiros que você implementou, trata-se do Spotenu. A diferença é que agora vocês terão que implementar o <strong>frontend</strong> (usando React, Redux e Hooks), o <strong>backend</strong> (Typescript, MVC e Clean Code) e toda a infraestrutura (AWS ou Firebase) que você precisar! Abaixo, colocamos as especificações divididas nessas três áreas. Você deve organizar as suas tarefas da forma que achar mais pertinente (recomendamos o uso do Trello), lembrando que você tem duas semanas para entregar!</p>

##### Explicação do projeto

<p align="justify">O <em>Spotenu</em> é um projeto que visa facilitar o acesso a músicas pelo mundo. Para isso, vamos dar suporte para dois tipos de usuários: as bandas (ou músicos) e os ouvintes (usuários que consomem as músicas). Além disso, nós vamos montar uma operação com funcionários próprios que precisam gerenciar os dados que circulam no nosso sistema. Eles serão os nossos administradores.</p>

**Usuários músicos**

<p align="justify">Vamos começar a explicar os usuários que são uma banda. Mesmo que haja músicos solos, nós vamos representar todos eles por uma banda, que deve possuir um nome, um nickname, uma descrição (onde se possa escrever qualquer texto de qualquer tamanho) e uma senha. Quando uma banda de cadastra, ela precisa esperar que um administrador aprove o seu cadastro para pode utilizar a nossa aplicação. 

As funcionalidades relacionadas a músicos são: criação, edição e deleção de álbuns; e criação, edição e deleção de músicas. Para criar um álbum, devemos informar o nome e relacioná-lo com um conjunto de gêneros. Um álbum pode ser de mais de um gênero musical. Na edição, é possível alterar o nome do álbum e os gêneros dele. Para criar uma música, os músicos devem informar o nome da música e o álbum a qual ela está relacionada. Só é possível alterar o nome da música. Por fim, sobre a deleção de músicas, não há muito o que explicar, mas a de álbuns tem um comportamento importante: ao se deletar um álbum todas as músicas devem ser deletadas também.  

Para se logar, o usuário músico pode fornecer o email ou o nickname (junto com a senha). Caso ele não tenha sido aprovado ainda, ele não deve ser capaz de se logar na aplicação.</p>

**Usuários ouvintes**

<p align="justify">Os ouvintes são divididos em duas categorias: pagantes e não pagantes. Os não pagantes só podem acessar a funcionalidade de busca da música, que deve fazer uma busca por termos dos nomes das músicas, com filtro de gênero opcional.

Já os pagantes tem acesso a isso e mais: playlists próprias. Ao criar uma playlist, basta fornecer um nome. Podem ser adicionadas músicas da playlist, ou retira-las. Todas as playlist são inicialmente privadas e só podem ser modificadas (ou adicionar e retirar músicas) pelo usuário criador. Ele pode tornar a playlist colaborativa, permitindo que qualquer um a veja; e, então, quem for seguidor da playlist também pode a modificar.

Um usuário ouvinte deve fornecer o nome, o email, nickname e senha no cadastro. Para logar, ele pode usar tanto o email como o nickname (junto com a senha).</p>

**Usuários administradores**

<p align="justify">Os usuários administradores são responsáveis pelo gerenciamento do nosso projeto. Somente um usuário administrador pode cadastrar outro usuário administrador, passando as informações: nome, email, nickname e senha. 

Eles podem aprovar os músicos (como explicado acima). Além disso, eles também são capazes de adicionar gêneros musicais, passando somente um nome.

Por fim, há a possibilidade de bloquear qualquer usuário (que não seja um administrador). Quando um usuário for bloqueado ele não pode mais logar na aplicação. Para se logar, um administrador pode informar o email ou o nickname (junto com a senha) </p>

### Linguagens

* HTML
* CSS
* JavaScript
* TypeScript
* SQL

### Tecnologias/Ferramentas

* Git
* BrowserDevTools
* React
* Redux
* Hooks
* Node.js
* MVC
* POO
* MySQL
* API Rest
* Teste Automatizados

### O que a plataforma é capaz de fazer :checkered_flag:

:trophy: Gerenciar uma plataforma musical contendo usuários de categorias distintas 

:trophy: Área de administrador onde é possível a criação de novos generos musicais e de aprovação de novas bandas

:trophy: Área de banda onde é possivel criar gerenciar o albuns e as músicas

### Linguagens e libs utilizadas :books:
**Frontend**
- [React](https://pt-br.reactjs.org/): versão 16.12.0
- [Styled Components](https://styled-components.com/): versão 5.0.0
- [axios](https://github.com/axios/axios): versão 0.19.1
- [connected-react-router](https://github.com/supasate/connected-react-router): versão 6.6.1
- [history](https://github.com/ReactTraining/history): versão 4.10.1
- [react-redux](https://react-redux.js.org/): versão 7.1.3
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): versão 5.1.2
- [redux](https://redux.js.org/): versão 4.0.5
- [redux-thunk](https://www.npmjs.com/package/redux-thunk): versão 2.3.0
</br>

**Backend**
- [Typescript](https://www.typescriptlang.org/docs/home.html): versão 3.9.2
- [bcryptjs](https://styled-components.com/): versão 2.4.3 @types/2.4.2
- [bestzip](https://www.npmjs.com/package/bestzip): versão 2.1.5
- [cors](https://www.npmjs.com/package/cors): versão 2.8.5
- [dotenv](https://github.com/motdotla/dotenv): versão 8.2.0
- [express](https://expressjs.com/): versão 4.17.1 @types/4.17.6
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken): versão 8.5.1 @types/8.5.0
- [knex](http://knexjs.org/): versão 0.20.15 @types/0.16.1
- lbn-lambda-express: versão: 0.1.10
- [mysql](https://github.com/mysqljs/mysql): versão 2.18.1
- [uuid](https://github.com/uuidjs/uuid): versão 8.0.0 @types/7.0.3

### Conhecimentos adquiridos durante o projeto :mortar_board:
- Renderização baseada em rotas para aplicação *single page*
- Gerenciamento de informaçãoes em *store* centralizada e conectada
- Substituição de componentes de classe e seus estados por componentes funcionais e *hooks*
- Escrita e leitura de dados em banco de dados de forma assícrona
- Autenticação e Autorização com armazenamento local de dados não sensíveis e criptografados
- Integração com banco de dados externo e uso de variáveis de ambiente
- Requisições HTTP / API Rest
- Organização e Padronização do código de acordo com normas de *Clean Code* e *MVC*
- Sistema de Autenticação e Autorização
- Criptografia e geração de tokens de informações sensíveis
- Desenvolvimento operacional e deploy em ambientes como AWS (EC2, Lambda, API Gateway, S3)

### Como rodar a aplicação (*Frontend*) :arrow_forward:

No terminal, clone o projeto: 

```
git clone https://github.com/danilomourelle/Spotenu.git
```
Navegue para dentro da raiz do projeto
```
cd Spotenu/Front-end
```
Instale as dependências
```
npm i
```
Execute a aplicação
```
npm start
```
Você poderá acessar a aplicação em [localhost:3000](http:localhost:3000)

### Como rodar a aplicação (*Backend*) :arrow_forward:

No terminal, clone o projeto: 

```
git clone https://github.com/danilomourelle/Spotenu.git
```
Navegue para dentro da raiz do projeto
```
cd Spotenu/Back-end
```
Instale as dependências
```
npm i
```
Crie um arquivo __.env__ com as configurções do seu bando de dados (preferencialmente MySQL, caso deseje utilizar outro, adaptações no código e dependências serão necessárias)
```
DB_HOST = seu_endereço_host
DB_USER = seu_usuário
DB_PASSWORD = sua_sehna
DB_DATABASE_NAME = seu_banco_de_dados
JWT_KEY = chave_para_jwt
JWT_EXPIRE_TIME = tempo_expiração (exemplo: 15 minutes)
BCRYPT_COST = cost_encriptação (idealmente um valor minimo de 12)
```
Execute a aplicação
```
npm run start:dev
```
 Você poderá utilizar os endpoints através de um cliente HTTP (ex. [Postman](https://www.postman.com/product/api-client/)) tendo o endereço [localhost:3003](http:localhost:3003) como URL base para as requisições. 
<!--Para informações de cada endpoint disponível conferir a [documentação](https://documenter.getpostman.com/view/10578976/T17CEqm8?version=latest) -->


### RESULTADO FINAL
[Site do projeto](http://spotenu-danilo-sagan.s3-website-us-east-1.amazonaws.com/)




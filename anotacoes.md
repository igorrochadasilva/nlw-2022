# Mission Impulse: Stage 1/5

**Conteúdo Técnico**
*Ambiente de desenvolvimento*
- Instalação de Node
- extensões - tailwind, code spell checker

*Fluxo de um SPA*
- SSR - Backend + Front-end => Browser
- SSR - Backend somente para navegador.

- SPA - Browser => Backend =JSON> Front End(React) =html/css/js> Browser
- SPA - Browser => Backend =JSON> Mobile(RN) =TextView/UIText> Browser

*Criando um projeto com React*
- npm create vite@latest para criar projeto
- Vite: converter o código javascript para navegadores entenderem. 

*Conteitos do React*
** Componente
** Propriedade

*Configurando Tailwind*
- Utilizado o tailwind css
- postcss: integra de forma automatica e observa o css, sempre convertendo o css para o browser consumir o arquivo
- O rem é relativo ao tamanho de fonte que o usuário utiliza no navegador, conforme ele aumentar a fonte, vamos aumentar tudo. IMPORTANTE PARA ACESSIBILIDADE
- No arquivo css, é possivel utilizar o @apply do tailwind e passar as class, de modo a puxar a estilização para a classe que esta uzando o appply
ex: .button{ @apply: bg-violet-500}
- Para usar uma cor fora do tailwind, basta usar [class]-[#000], exemplo: bg-[#000]

*Componente de Widget (Abrir/Fechar)*
- npm install phosphor-react - biblioteca de icones.

*Conteitos de acessibilidade*
- Acessibilidade utilizando library em react e area-expanded.
- reakit, radix-ui já implementão toda a parte do aria.

*Utilizando PopOver*
- headless UI, library integrada com tailwind
- https://headlessui.dev/react/popover


# Mission Impulse: Stage 2/5

**Conteúdo Técnico**
*Estilos globais (cor de fundo)*
- Utilizando o apply do tailwind para aplicar estilo no body

*Estrutura WidgetForm*
- Header
- Footer
- Utilizando o keyof do tipescrypt para criar um type do feedbackType. (INTERESSANTE!)

*Escolha o tipo do feedback*
- Escolha o tipo de feedback sendo Ideia, bug ou outro vindo de um objeto.


*Separando componente de passos*
- Criando componentes Steps FeedbackContent, FeedbackSuccess e FeedbackType

*Comunicação de componentes*
- Passando valores e funções atráves de props para os componeentes

*Conteudo do feedback*
- Criando e estilizando Formulário
- Baixando @tailwind/forms e tailwind-scrollbar para estilização de form e scrollbar 

*Funcionalidade de Screenshot*
- Instalando library html2canvas para tirar print da tela e retornar uma imagem base64

*Componente de Screenshot*
- Criação de componente para tirar print da tela utilizando html2canvas

*Componente de Loading*
- Criação do componente de loading após ser tirado print, ter o componente loading rodando até o fim do processo de print.

*Envio de feedback*
- Armazenando imagem e texto em objeto para envio para DB posteriormente.

*Sucesso do feedback*
- Criação de componente FeedbackSuccessStep com evento de retorno para primeiro step

# Mission Impulse: Stage 3/5

**Conteúdo Técnico**

*Fluxo da aplicação*

*Setup da estrutura*

- Typescript
- ts-node-dev: toda vez que ouver uma alteração em um arquivo, ele vai reiniciar o servidor.
- Foi alterado o target do tsconfig informando que o ambiente que usaremos o script suporta es2020

*Configurando Expresss*
- Instalando biblioteca express para trbalhar com a parte de rotas http, diferentes rotas.

*Configurando SQlite para ambiende de dev*
- estaremos utilizando ele pois não é necessário instalar nada na maquina.

*Configurando Prisma*
- npm i @prisma/client
- O PRISMA ajuda os desenvolvedores de aplicativos a criar mais rápido e cometem menos erros com um kit de ferramentas de banco de dados de código aberto para PostgreSQL, MySQL, SQL Server, SQLite, MongoDB e Cockroachdb (visualização). (ORM)
- npx prisma migrate dev para criar db
- npx prisma studio para visualizar localmente
- O conceito de migration serve para guardar o historico de alterações, historico dos eventos que ocorreram.

*Rota de feedback*
- Criando rotas com o express para receber os dados e enviar para o db do prisma.
- Utilizando Postman ou insomnia para fazer requisições
- Envio de dados recebidos por requisição de envio pelo postman ou insomnia atráves do prism

*Envio de e-mail*
- Istalando nodemailer para envio de emails
- Utilizando o mailtrap para utilizar como smtp de envio de email
- Configurado integração no mailtrap com ndoemailer para envio de email

*Principios do SOLID*

1. Single responsability Principle
- Cada classe/função tem uma responsabilidade unica;

2. Open/Closed Principle
- As classes da aplicação evem ser abertas para extensão mas fechadas para modificação;

3. Liskov Substitution Principle
- Nós devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando.

4. Interface Segregation Principle
- princípio da segregação de Interface afirma que nenhum cliente deve ser forçados a depender de métodos que não utiliza.

5. Dependency Inversion principle
-Principio da inversão de dependência refere-se a uma forma específica de desacoplamento de módulos de software que determina a inversão das relações de dependência: partem de módulos de alto nível, responsáveis pelas diretrizes, para os de baixo nível.


*Aplicando SOLID na aplicação*
- Separando as atividades de cada class de modo a deixar a aplicação solida

*Configurando Jest*
- Instalando o jest para testes.
- Instalando o swc para compiler, 20x mais rapido que o babel, para rodar testes.
- O teste unitario deve testar estando desconectado das dependencias
- O teste unitario tem a responsabilidade de testar o conteudo da função

*Testes unitários na aplicação*
- Criando testes unitários, simplesmente sensacional!
- spies - espiões, saber se alguma função foi chamada.

*Cors*
- Utilizando o cors para impedir acessos de endereços não permitidos no backend

# Mission Impulse: Stage 4/5

**Conteúdo Técnico**

*Conhecendo o React Native e o Expo*
- A vantagem de se utilizar o React Native, é que você pode utilizar tanto no android quanto no IOS, a comunidade é gigantesca.
- O Expo disponibiliza um conjunto de funcionalidades prontaas para usar camera, video, integrações etc.


*Criando o projeto*
- Utilizando o comando `expo init mobile` para criação do projeto.

*Estrutura de pastas e arquivos*
- expo-shared: arquivos
- assets: imagens da aplicação de carregamento.
- src: conteudo da aplicação
- app: aplicação

*Pasta com assets, tokens de cores, etc*
- Explicando estruturas das pastas, e salvando componentes

*Snippets para criação de componentes*
- Criando componente, e usando o expo go para ver aplicação no celular.
- Adicionando novo style no app do theme, e criação de componente widget.

*Fontes personalizadas*
- expo google fonts para instalar as fonts
- expo app loading: garantir que as fonts estejam carregadas para aplicação, enquanto isso, mostrar carregamento.

*Widget Component* 
- criação do widget

*botão flutuante*
- criação do botão flutuante
- instalação do phospher para react-native para icones, https://www.npmjs.com/package/phosphor-react-native.
- instalando `react-native-svg`.
- instalando `react-native-iphone-x-helper

*Gestos com Bottomsheet*
- instalando `expo install @gorhom/bottom-sheet@^4`
- instalando `react-native-reanimated` e `react-native-gesture-handler`
- abertura de modal e fechamento com efeito animation.

*Copyright Component* 
- criação de componente para ser usado em varias áreas.

*Option Component*
- criação de componente de opção de tipo de chamado a ser aberto, duvida, bug, etc..

*Options Components*
- criação de componente que irá mostrar todas as opções de chamado.

*Form Component*
- criação de componente que irá mostrar formulário, caixa de texto, botão de foto e envio de dados.

*Button Component*
- criação de componentebotão para ser utilizado em varios componentes.

*ScreenshotButton Component*
- criação de componente botão de tirar foto

*Success Component*
- criação de tela de sucesso.

*Integração com backend utilizando axios*
- instalando react-native-view-shot para usar função capturescreen
- criando controle de exibição de telas de feedback.
- instalação de expo-file-system para converter uri da imagem para base64
- Enviado dados para backend prisma e verificando se email foi disparado por mailtrap

# Mission Impulse: Stage 5/5

**Conteúdo Técnico**

*Integrando backend com frontend*
- instalando axios para crição de api
- `npx prisma studio` para acessar painel do prisma
- Loading de botão de enviar
- Enviando dados.

*Loading no botão de Enviar*
- adicionando loading em botão de enviar feedback

*Deploy do front-end*

**Configurando**
- Configurando variaveis ambiente
- vite env variables

**Subindo no github**
- Subindo para o github

**Deploy na Vercel**
- Criando projeto na vercel, e utilizando o vite framework

*Deploy no Backend*
- Instalar o postgresql na maquina, para utilizar um unico banco de dados tanto no ambiente de dev como em prod

**Configurando**
- Configurando tsconfig para gerar dist e arquivos que iremos deploia para o backend

**Subindo no github**

**Deploy no Railway**
- Utilizando o Railway que é semelhante a vercel, porem com plano gratuito.
- Criando DB Postgresql automatico com o railway

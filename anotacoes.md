# Mission Impulse: Stage 1/5


**Conteúdo Técnico**
* Ambiente de desenvolvimento
- Instalação de Node
- extensões - tailwind, code spell checker

* Fluxo de um SPA
- SSR - Backend + Front-end => Browser
- SSR - Backend somente para navegador.

- SPA - Browser => Backend =JSON> Front End(React) =html/css/js> Browser
- SPA - Browser => Backend =JSON> Mobile(RN) =TextView/UIText> Browser

* Criando um projeto com React
- npm create vite@latest para criar projeto
- Vite: converter o código javascript para navegadores entenderem. 

* Conteitos do React
** Componente
** Propriedade

* Configurando Tailwind
- Utilizado o tailwind css
- postcss: integra de forma automatica e observa o css, sempre convertendo o css para o browser consumir o arquivo
- O rem é relativo ao tamanho de fonte que o usuário utiliza no navegador, conforme ele aumentar a fonte, vamos aumentar tudo. IMPORTANTE PARA ACESSIBILIDADE
- No arquivo css, é possivel utilizar o @apply do tailwind e passar as class, de modo a puxar a estilização para a classe que esta uzando o appply
ex: .button{ @apply: bg-violet-500}
- Para usar uma cor fora do tailwind, basta usar [class]-[#000], exemplo: bg-[#000]

* Componente de Widget (Abrir/Fechar)
- npm install phosphor-react - biblioteca de icones.

* Conteitos de acessibilidade
- Acessibilidade utilizando library em react e area-expanded.
- reakit, radix-ui já implementão toda a parte do aria.

* Utilizando PopOver
- headless UI, library integrada com tailwind
- https://headlessui.dev/react/popover


# Mission Impulse: Stage 2/5

**Conteúdo Técnico**
* Estilos globais (cor de fundo)
- Utilizando o apply do tailwind para aplicar estilo no body

* Estrutura WidgetForm
- Header
- Footer
- Utilizando o keyof do tipescrypt para criar um type do feedbackType. (INTERESSANTE!)

* Escolha o tipo do feedback
- Escolha o tipo de feedback sendo Ideia, bug ou outro vindo de um objeto.


* Separando componente de passos
- Criando componentes Steps FeedbackContent, FeedbackSuccess e FeedbackType

* Comunicação de componentes
- Passando valores e funções atráves de props para os componeentes

* Conteudo do feedback
- Criando e estilizando Formulário
- Baixando @tailwind/forms e tailwind-scrollbar para estilização de form e scrollbar 

* Funcionalidade de Screenshot
- Instalando library html2canvas para tirar print da tela e retornar uma imagem base64

* Componente de Screenshot
- Criação de componente para tirar print da tela utilizando html2canvas

* Componente de Loading
- Criação do componente de loading após ser tirado print, ter o componente loading rodando até o fim do processo de print.

* Envio de feedback
- Armazenando imagem e texto em objeto para envio para DB posteriormente.

* Sucesso do feedback
- Criação de componente FeedbackSuccessStep com evento de retorno para primeiro step






# 21GO Proteção Veicular - Landing Page

Landing page em React para divulgação dos serviços de proteção veicular da 21GO, com foco no consultor Anselmo Silva. A página apresenta chamadas comerciais, coberturas, assistência 24 horas, tipos de veículos atendidos, formulário de simulação e contatos.

## Tecnologias

- React 19
- Vite 8
- Tailwind CSS 4
- React Icons
- ESLint

## Requisitos

- Node.js instalado
- npm instalado

Para conferir as versões:

```bash
node -v
npm -v
```

## Instalação

Instale as dependências do projeto:

```bash
npm install
```

## Scripts

Rodar em ambiente de desenvolvimento:

```bash
npm run dev
```

Gerar build de produção:

```bash
npm run build
```

Verificar problemas de lint:

```bash
npm run lint
```

Visualizar o build localmente:

```bash
npm run preview
```

## Estrutura Do Projeto

```text
21go-website/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── App.css
    ├── assets/
    │   ├── carro-grafite.png
    │   └── young-man-changing-car-wheel.jpg
    └── components/
        ├── Assistencia.jsx
        ├── Coberturas.jsx
        ├── Beneficios.jsx
        ├── Consultor.jsx
        ├── CotaForm.jsx
        ├── Header.jsx
        ├── Hero.jsx
        ├── Rodape.jsx
        └── Veiculos.jsx
```

## Arquivos Principais

### `src/main.jsx`

Ponto de entrada da aplicação. Renderiza o componente `App` dentro do elemento `#root` definido no `index.html`.

### `src/App.jsx`

Arquivo principal da página. Hoje concentra:

- Barra de navegação
- Hero inicial
- Botões de chamada para simulação e WhatsApp
- Renderização dos componentes `Coberturas` e `Assistencia`
- Seção de tipos de veículos
- Formulário de simulação
- Rodapé com dados do consultor

Também guarda constantes importantes:

- `NAV_LINKS`: links exibidos no menu
- `WHATSAPP_LINK`: link do WhatsApp do consultor
- `INSTAGRAM_LINK`: link do Instagram
- `EMAIL_LINK`: link de e-mail
- `VEICULOS_ICONS`: mapeamento de tipos de veículos para ícones
- `VEICULOS`: lista de tipos de veículos exibidos na página

### `src/components/Coberturas.jsx`

Componente da seção de coberturas. Usa a constante `DADOS_COBERTURAS` para renderizar cards com:

- Roubo e Furto
- Colisão
- Incêndio
- Fenômenos da Natureza
- Danos a Terceiros
- Rastreamento Veicular

Cada cobertura possui título, descrição e ícone.

### `src/components/Assistencia.jsx`

Componente da seção de assistência 24 horas. Usa a constante `DADOS_ASSISTENCIA` para renderizar cards com:

- Reboque
- Chaveiro
- Pane Seca
- Borracharia
- Socorro Mecânico
- Socorro Elétrico
- Carro Amigo
- Táxi Emergencial

Cada serviço possui título, descrição e ícone profissional do pacote `react-icons/fa6`.

## Componentes Ainda Vazios

Alguns arquivos existem, mas ainda não possuem implementação:

- `src/components/Beneficios.jsx`
- `src/components/Consultor.jsx`
- `src/components/CotaForm.jsx`
- `src/components/Header.jsx`
- `src/components/Hero.jsx`
- `src/components/Veiculos.jsx`

Eles podem ser usados futuramente para quebrar o `App.jsx` em componentes menores. Por exemplo:

- mover o header para `Header.jsx`
- mover o hero para `Hero.jsx`
- mover o formulário para `CotaForm.jsx`
- mover a seção de veículos para `Veiculos.jsx`

O arquivo `Rodape.jsx` possui um exemplo simples de ícones, mas o rodapé real da página está atualmente dentro de `App.jsx`.

## Contatos Configurados

Os contatos principais estão centralizados no início do `src/App.jsx`:

```jsx
const WHATSAPP_LINK = 'https://wa.me/5521983462049?text=...';
const INSTAGRAM_LINK = 'https://www.instagram.com/21goprotecao.anselmo?...';
const EMAIL_LINK = 'mailto:21goprotecao.anselmo@gmail.com';
```

Para trocar o WhatsApp, altere o número no formato internacional:

```text
55 + DDD + número
```

Exemplo:

```text
https://wa.me/5521983462049
```

Para mudar a mensagem automática do WhatsApp, altere o texto depois de `?text=`. Como URLs não aceitam espaços e acentos diretamente, use texto codificado para URL.

## Menu De Navegação

O menu está definido em `NAV_LINKS`:

```jsx
const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Coberturas', href: '#coberturas' },
  { label: 'Assistência 24h', href: '#assistencia-24h' }
];
```

Para adicionar um novo item:

1. Crie ou confirme um `id` na seção de destino.
2. Adicione um item em `NAV_LINKS`.

Exemplo:

```jsx
{ label: 'Simulação', href: '#simulacao' }
```

## Formulário De Simulação

O formulário fica em `src/App.jsx`, na seção com `id="simulacao"`.

Os campos são definidos no array `formInputs`:

```jsx
const formInputs = [
  { name: 'nome', label: 'Nome Completo', type: 'text', placeholder: 'Ex: Anselmo Silva', required: true },
  ...
];
```

O estado do formulário fica em `formData`.

Atualmente, ao enviar:

- o comportamento padrão do formulário é bloqueado com `e.preventDefault()`
- os dados são exibidos no console
- um alerta de agradecimento aparece para o usuário

Função responsável:

```jsx
const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log('Dados da cotação enviados:', formData);
  alert(`Obrigado, ${formData.nome}! Em breve entraremos em contato.`);
};
```

Para integrar com backend, WhatsApp ou serviço externo, substitua essa função.

## Como Editar Coberturas

Abra `src/components/Coberturas.jsx` e edite a lista `DADOS_COBERTURAS`.

Formato de cada item:

```jsx
{
  titulo: 'Roubo e Furto',
  descricao: 'Indenização de até 100% da tabela FIPE para garantir seu patrimônio.',
  icone: FaShieldHalved
}
```

Para usar outro ícone, importe-o de `react-icons/fa6` e coloque o componente na propriedade `icone`.

## Como Editar Assistências

Abra `src/components/Assistencia.jsx` e edite a lista `DADOS_ASSISTENCIA`.

Formato de cada item:

```jsx
{
  titulo: 'Reboque',
  descricao: 'Guincho disponível 24h para levar seu veículo até a oficina ou sua casa.',
  Icone: FaTruckFast
}
```

A propriedade `Icone` guarda o componente de ícone que será renderizado no card.

## Identidade Visual

Cores principais usadas na landing page:

- Azul institucional: `#002b5e`
- Laranja de destaque: `#f26522`
- Fundo claro: `slate-50`
- Texto secundário: tons de `gray`

Fonte:

- Inter, carregada no `index.html` via Google Fonts.

Estilização:

- A maior parte do layout usa classes utilitárias do Tailwind CSS.
- O arquivo `src/index.css` importa o Tailwind com `@import "tailwindcss";`.

## Ícones

O projeto usa principalmente `react-icons/fa6`.

Exemplo:

```jsx
import { FaInstagram } from 'react-icons/fa6';
```

Depois:

```jsx
<FaInstagram className="text-lg" />
```

## Build E Publicação

Gere os arquivos finais:

```bash
npm run build
```

O Vite cria a pasta:

```text
dist/
```

Essa pasta contém os arquivos estáticos prontos para hospedagem.

Pode publicar em serviços como:

- Vercel
- Netlify
- Hostinger
- GitHub Pages
- servidor próprio com Nginx/Apache

Para conferir localmente antes de publicar:

```bash
npm run preview
```

## Checklist Antes De Publicar

- Rodar `npm run lint`
- Rodar `npm run build`
- Testar o link do WhatsApp
- Testar o link do Instagram
- Testar o link do e-mail
- Conferir formulário em desktop e celular
- Conferir menu em desktop
- Conferir textos comerciais e dados legais
- Conferir favicon e título no navegador

## Melhorias Futuras Recomendadas

- Separar `Header`, `Hero`, `Veiculos`, `Formulario` e `Rodape` em componentes próprios.
- Enviar o formulário diretamente para WhatsApp com os dados preenchidos.
- Adicionar máscara no campo de telefone.
- Adicionar validação visual de campos obrigatórios.
- Remover componentes vazios se não forem usados.
- Substituir textos fixos por um arquivo de configuração.
- Adicionar SEO com título, descrição e tags sociais no `index.html`.

## Solução De Problemas

### O site não abre no navegador

Instale dependências e rode o servidor:

```bash
npm install
npm run dev
```

### Ícone não aparece

Confirme se o ícone foi importado corretamente:

```jsx
import { FaInstagram } from 'react-icons/fa6';
```

Depois confirme se ele está sendo usado como componente:

```jsx
<FaInstagram />
```

### Link do menu não rola para a seção

Confira se o `href` do menu aponta para um `id` existente.

Exemplo:

```jsx
{ label: 'Coberturas', href: '#coberturas' }
```

A seção precisa ter:

```jsx
<section id="coberturas">
```

### O formulário não envia para lugar nenhum

Esse é o comportamento atual. O formulário apenas mostra um alerta e imprime os dados no console. Para envio real, é necessário integrar a função `handleFormSubmit` com WhatsApp, API, e-mail ou CRM.

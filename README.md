# Teste Técnico Front-end BeTalent

Uma aplicação de gestão de funcionários desenvolvida como parte do processo seletivo da BeTalent, focada em criar uma interface intuitiva e responsiva para visualização e busca de dados de colaboradores.

## Demonstração

### [Acessar Aplicação Demo](https://lipesou.github.io/be-talent-table/) 

A aplicação conta com um **sistema inteligente de detecção de ambiente** através do env que garante funcionamento tanto em desenvolvimento quanto em produção:

Para garantir uma experiência de demonstração sem depender de serviços externos, foi desenvolvido um mecanismo que:

- **Em Ambiente de Produção (GitHub Pages):**
  - Detecta automaticamente que está em produção
  - Utiliza dados mockados internamente

- **Em Ambiente de Desenvolvimento (Local):**
  - Conecta-se ao json-server local

### Funcionalidades Implementadas

✅ Tabela de funcionários com foto, nome, cargo, data de admissão e telefone

✅ Sistema de busca em tempo real por nome, cargo ou telefone

✅ Formatação automática de datas e telefones no front-end

✅ Design responsivo (mobile-first)

✅ Interface limpa seguindo o design system fornecido

✅ Implementado CI CD

✅ Testes unitários na tabela 

✅ Storybook na tabela

## Tecnologias Utilizadas

- **React 19** 
- **TypeScript**
- **Vite**
- **CSS Modules** - Estilização componentizada
- **json-server** - API simulada para fornecimento de dados
- **ESLint + Prettier** - Padronização e qualidade de código
- **Vitest + react-testing-library** - Framework de testes
- **GitHub Actions** - CI/CD automatizado
- **Storybook** - Documentação de componentes

## Estrutura de pastas
Foi baseada nesse artigo a estrutura de pastas do site

https://dev.to/pramod_boda/recommended-folder-structure-for-react-2025-48mc

<img width="185" height="726" alt="image" src="https://github.com/user-attachments/assets/637e0419-c2b6-4668-ac97-71ba50ca5399" />

- A pasta componentes foi separada por common e features. A common ela vai ser para componentes mais comuns que podem ser utilizados em qualquer tela e a features foi separados por componentes mais específicos e separado por pastas com o nome da página.

## Instalação e Execução

### Pré-requisitos

- Node.js (v18+)
- npm ou yarn
- Git

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/betalent-frontend-test.git
cd betalent-frontend-test

# 2. Instale as dependências
npm install

# 3. Em um terminal, inicie o json-server
npx json-server --watch db.json

# 4. Em outro terminal, inicie a aplicação
npm run dev
A aplicação estará disponível em http://localhost:5175
```
## Storybook
Foi implementado uma pequena documentação de componente utilizando storybook para a tabela
```bash
npm run storybook
```
<img width="1212" height="478" alt="image" src="https://github.com/user-attachments/assets/f4dc3a88-c3fc-4684-a64e-df19b3ffec79" />

## Testes
```bash
npm run test
```

Foram implementados testes simples visuais para dois componentes utilizando o vitest mais react-testing-library.
<img width="1014" height="400" alt="image" src="https://github.com/user-attachments/assets/5f02871c-ea9d-4657-bfcf-cd0c9f8b02b5" />


## CI/CD
O projeto utiliza GitHub Actions para:

✅ Executar testes automaticamente em cada push
✅ Deploy automático para GitHub Pages

<img width="1656" height="396" alt="image" src="https://github.com/user-attachments/assets/bebb4564-ece0-48c0-9240-fa7f587b2c5d" />

## Design e UI/UX

A aplicação segue fielmente o mockup fornecido no Figma, implementando:

<img width="1116" height="918" alt="image" src="https://github.com/user-attachments/assets/cb1c9637-863e-4c40-a6ee-d323ef4f236b" />

<img width="394" height="850" alt="image" src="https://github.com/user-attachments/assets/224c5149-f815-439a-9db9-bb557aa26e34" />

### Design System

- **Cores Principais:**
  - Blue Primary: `#0500FF`
  - Black: `#1C1C1C`
  - Gray Scale: `#9E9E9E`, `#DFDFDF`, `#F0F0F0`
  - White: `#FFFFFF`

- **Tipografia:**
  - Font Family: Helvetica Neue
  - H1: 20px, Medium
  - H2: 16px, Medium
  - H3: 16px, Regular

----- 
Desenvolvido com 💙 para o processo seletivo da BeTalent

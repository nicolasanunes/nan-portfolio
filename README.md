# 🌟 Portfólio Pessoal - Nícolas Nunes

<div align="center">

**🌐 [Ver Demonstração ao Vivo](https://nicolasanunes.space) | [Live Demo](https://nicolasanunes.space)**

[🇧🇷 Português](#-português) | [🇺🇸 English](#-english)

</div>

---

## 🇧🇷 Português

### 📖 Sobre o Projeto

Este é meu portfólio pessoal desenvolvido por mim para apresentar meus projetos, habilidades e experiência profissional como Desenvolvedor Fullstack. O projeto foi construído com foco em **performance**, **acessibilidade** e **design moderno**.

### 🚀 Tecnologias Utilizadas

#### **Core**

- **[Vue.js 3](https://vuejs.org/)** - Framework JavaScript progressivo
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[Vite](https://vitejs.dev/)** - Build tool rápida e moderna
- **[Pinia](https://pinia.vuejs.org/)** - Gerenciamento de estado
- **[Vue Router](https://router.vuejs.org/)** - Roteamento oficial do Vue
- **[Vue I18n](https://vue-i18n.intlify.dev/)** - Internacionalização (PT-BR/EN-US)

#### **UI/UX**

- **[TailwindCSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Reka UI](https://reka-ui.com/)** - Componentes acessíveis
- **[Lucide Icons](https://lucide.dev/)** - Ícones modernos
- **[Motion-V](https://motion-v.vercel.app/)** - Animações suaves
- **[Three.js](https://threejs.org/)** - Efeitos 3D e visuais

#### **Qualidade de Código**

- **[Vitest](https://vitest.dev/)** - Framework de testes unitários
- **[Playwright](https://playwright.dev/)** - Testes end-to-end
- **[ESLint](https://eslint.org/)** - Linter para JavaScript/TypeScript
- **[Prettier](https://prettier.io/)** - Formatador de código

### 📦 Instalação e Configuração

#### **Pré-requisitos**

- Node.js >= 24.11.0 < 25
- npm ou yarn

#### **1. Clone o repositório**

```bash
git clone https://github.com/nicolasanunes/nan-portfolio.git
cd nan-portfolio
```

#### **2. Instale as dependências**

```bash
npm install
```

#### **3. Execute o projeto em modo desenvolvimento**

```bash
npm run dev
```

O projeto estará disponível em: `http://localhost:5173`

### 🛠️ Comandos Disponíveis

#### **Desenvolvimento**

```bash
npm run dev
```

Inicia o servidor de desenvolvimento com hot-reload. Qualquer alteração no código será refletida automaticamente no navegador.

#### **Build de Produção**

```bash
npm run build
```

Compila e otimiza o projeto para produção. Os arquivos otimizados serão gerados na pasta `dist/`.

#### **Preview da Build**

```bash
npm run preview
```

Visualiza a versão de produção localmente antes do deploy.

#### **Testes Unitários**

```bash
npm run test:unit
```

Executa os testes unitários usando Vitest. Inclui testes para stores, componentes, utils e views.

#### **Testes E2E**

```bash
# Primeira execução - instalar navegadores
npx playwright install

# Executar todos os testes
npm run test:e2e

# Executar apenas no Chromium
npm run test:e2e -- --project=chromium

# Modo debug
npm run test:e2e -- --debug
```

#### **Linting e Formatação**

```bash
# Executar linter e corrigir problemas
npm run lint

# Formatar código com Prettier
npm run format
```

#### **Type Check**

```bash
npm run type-check
```

Verifica os tipos TypeScript em todo o projeto sem gerar arquivos de saída.

### 🎨 Funcionalidades

- ✅ **Tema Claro/Escuro** - Alternância suave entre temas com persistência
- ✅ **Internacionalização** - Suporte para Português (BR) e Inglês (US)
- ✅ **Design Responsivo** - Adaptável a todos os tamanhos de tela
- ✅ **Animações Suaves** - Transições e efeitos visuais elegantes
- ✅ **Acessibilidade** - Seguindo padrões WCAG 2.1
- ✅ **SEO Otimizado** - Meta tags dinâmicas e estrutura semântica
- ✅ **Performance** - Lazy loading, code splitting e otimizações

### 🌐 Deploy

O projeto está hospedado e pode ser acessado em: [https://nicolasanunes.github.io/nan-portfolio](https://nicolasanunes.github.io/nan-portfolio)

### 📝 Estrutura do Projeto

```
src/
├── assets/          # Recursos estáticos (CSS, imagens)
├── components/      # Componentes Vue reutilizáveis
│   ├── ui/         # Componentes de UI
│   └── Navbar.vue  # Barra de navegação
├── lib/            # Utilitários e helpers
├── locales/        # Arquivos de tradução (i18n)
├── plugins/        # Plugins do Vue (i18n)
├── router/         # Configuração de rotas
├── stores/         # Stores do Pinia (estado global)
├── views/          # Páginas/Views da aplicação
└── __tests__/      # Testes unitários
```

### 📄 Licença

**Uso Pessoal e Educacional**

Este projeto está disponível para **uso pessoal e educacional**. Você pode:

- ✅ Clonar e estudar o código
- ✅ Usar como referência para aprendizado
- ✅ Adaptar para seu próprio portfólio pessoal

**Restrições:**

- ❌ **Uso comercial não permitido** sem autorização expressa
- ❌ Redistribuição como produto próprio
- ❌ Remoção dos créditos do autor original

Para uso comercial ou outras licenças, entre em contato: [nicolasanunes@gmail.com](mailto:nicolasanunes@gmail.com)

### 👨‍💻 Autor

**Nícolas dos Anjos Nunes**

- Portfolio: [nicolasanunes.github.io](https://nicolasanunes.github.io/nan-portfolio)
- LinkedIn: [linkedin.com/in/nicolasanunes](https://www.linkedin.com/in/nicolasanunes)
- GitHub: [github.com/nicolasanunes](https://github.com/nicolasanunes)
- Email: nicolasanunes@gmail.com

---

## 🇺🇸 English

### 📖 About the Project

This is my personal portfolio developed by me to showcase my projects, skills, and professional experience as a Fullstack Developer. The project was built with a focus on **performance**, **accessibility**, and **modern design**.

### 🚀 Technologies Used

#### **Core**

- **[Vue.js 3](https://vuejs.org/)** - Progressive JavaScript framework
- **[TypeScript](https://www.typescriptlang.org/)** - Typed superset of JavaScript
- **[Vite](https://vitejs.dev/)** - Fast and modern build tool
- **[Pinia](https://pinia.vuejs.org/)** - State management
- **[Vue Router](https://router.vuejs.org/)** - Official Vue routing
- **[Vue I18n](https://vue-i18n.intlify.dev/)** - Internationalization (PT-BR/EN-US)

#### **UI/UX**

- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Reka UI](https://reka-ui.com/)** - Accessible components
- **[Lucide Icons](https://lucide.dev/)** - Modern icons
- **[Motion-V](https://motion-v.vercel.app/)** - Smooth animations
- **[Three.js](https://threejs.org/)** - 3D effects and visuals

#### **Code Quality**

- **[Vitest](https://vitest.dev/)** - Unit testing framework
- **[Playwright](https://playwright.dev/)** - End-to-end testing
- **[ESLint](https://eslint.org/)** - JavaScript/TypeScript linter
- **[Prettier](https://prettier.io/)** - Code formatter

### 📦 Installation and Setup

#### **Prerequisites**

- Node.js >= 24.11.0 < 25
- npm or yarn

#### **1. Clone the repository**

```bash
git clone https://github.com/nicolasanunes/nan-portfolio.git
cd nan-portfolio
```

#### **2. Install dependencies**

```bash
npm install
```

#### **3. Run the project in development mode**

```bash
npm run dev
```

The project will be available at: `http://localhost:5173`

### 🛠️ Available Commands

#### **Development**

```bash
npm run dev
```

Starts the development server with hot-reload. Any code changes will be automatically reflected in the browser.

#### **Production Build**

```bash
npm run build
```

Compiles and optimizes the project for production. Optimized files will be generated in the `dist/` folder.

#### **Preview Build**

```bash
npm run preview
```

Preview the production version locally before deployment.

#### **Unit Tests**

```bash
npm run test:unit
```

Runs unit tests using Vitest. Includes tests for stores, components, utils, and views.

#### **E2E Tests**

```bash
# First run - install browsers
npx playwright install

# Run all tests
npm run test:e2e

# Run only on Chromium
npm run test:e2e -- --project=chromium

# Debug mode
npm run test:e2e -- --debug
```

#### **Linting and Formatting**

```bash
# Run linter and fix issues
npm run lint

# Format code with Prettier
npm run format
```

#### **Type Check**

```bash
npm run type-check
```

Checks TypeScript types across the project without generating output files.

### 🎨 Features

- ✅ **Light/Dark Theme** - Smooth theme switching with persistence
- ✅ **Internationalization** - Support for Portuguese (BR) and English (US)
- ✅ **Responsive Design** - Adaptable to all screen sizes
- ✅ **Smooth Animations** - Elegant transitions and visual effects
- ✅ **Accessibility** - Following WCAG 2.1 standards
- ✅ **SEO Optimized** - Dynamic meta tags and semantic structure
- ✅ **Performance** - Lazy loading, code splitting, and optimizations

### 🌐 Deployment

The project is hosted and can be accessed at: [https://nicolasanunes.github.io/nan-portfolio](https://nicolasanunes.github.io/nan-portfolio)

### 📝 Project Structure

```
src/
├── assets/          # Static resources (CSS, images)
├── components/      # Reusable Vue components
│   ├── ui/         # UI components
│   └── Navbar.vue  # Navigation bar
├── lib/            # Utilities and helpers
├── locales/        # Translation files (i18n)
├── plugins/        # Vue plugins (i18n)
├── router/         # Route configuration
├── stores/         # Pinia stores (global state)
├── views/          # Application pages/views
└── __tests__/      # Unit tests
```

### 📄 License

**Personal and Educational Use**

This project is available for **personal and educational use**. You may:

- ✅ Clone and study the code
- ✅ Use as a reference for learning
- ✅ Adapt for your own personal portfolio

**Restrictions:**

- ❌ **Commercial use not permitted** without express authorization
- ❌ Redistribution as your own product
- ❌ Removal of original author credits

For commercial use or other licenses, contact: [nicolasanunes@gmail.com](mailto:nicolasanunes@gmail.com)

### 👨‍💻 Author

**Nícolas dos Anjos Nunes**

- Portfolio: [nicolasanunes.github.io](https://nicolasanunes.github.io/nan-portfolio)
- LinkedIn: [linkedin.com/in/nicolasanunes](https://www.linkedin.com/in/nicolasanunes)
- GitHub: [github.com/nicolasanunes](https://github.com/nicolasanunes)
- Email: nicolasanunes@gmail.com

---

<div align="center">

Made with ❤️ by Nícolas Nunes

</div>

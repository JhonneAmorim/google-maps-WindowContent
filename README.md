# Google Maps & & WindowContent Personalizada

Este é um projeto para exibir informações de imóveis utilizando o **Google Maps API**, com integração de um carrossel de imagens (Slick Carousel) e janelas informativas personalizadas.

---

## 📌 Funcionalidades

- Exibição de imóveis em um mapa interativo.
- Janela de informações personalizável para cada imóvel, incluindo:
  - Título e descrição do imóvel.
  - Carrossel de imagens responsivo.
  - Botões de interação.
- Fechamento da janela ao clicar fora dela no mapa.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação do conteúdo da página.
- **CSS3**: Estilização e layout responsivo.
- **JavaScript (ES6+)**: Lógica do projeto no frontend e backend.
- **Google Maps JavaScript API**: Integração do mapa interativo com marcadores.
- **Slick Carousel**: Carrossel de imagens responsivo.
- **jQuery**: Biblioteca para manipulação do DOM e suporte ao Slick Carousel.
- **Express**: Framework backend minimalista para Node.js.
- **Dotenv**: Gerenciamento de variáveis de ambiente.
- **Cors**: Middleware para solucionar problemas de CORS.

---

## 📂 Estrutura de Pastas

```
├── node_modules
├── public
│   ├── assets
│   │   ├── css
│   │   │   └──
│   │   ├── imgs
│   │   │   ├── dentro.jpg
│   │   │   ├── fachada.jpg
│   │   │   └── varanda.jpg
│   │   └── js
│   │       └── script.js
│   └── index.html
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js

```

---

## 🚀 Como Executar o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/JhonneAmorim/google-maps-WindowContent.git
cd google-maps-WindowContent
```

### 2. Instalar Dependências

Certifique-se de que o **Node.js** está instalado e use o seguinte comando para instalar as dependências necessárias:

```bash
npm install
```

### 3. Configurar a Chave da API

- Crie um arquivo `.env` na raiz do projeto.
- Adicione a sua chave da API do Google Maps:

```
API_KEY=SUA_CHAVE_DO_GOOGLE_MAPS
```

### 4. Executar o Projeto

Inicie o projeto com um servidor local. Exemplo com **Live Server**:

```bash
npx live-server public
```

Ou use o backend configurado para a API:

```bash
node server.js
```

### 5. Acessar no Navegador

Abra o navegador e acesse o seguinte endereço:

```
http://localhost:3000
```

---

## ⚙️ Dependências

- **Google Maps API**
- **jQuery**
- **Slick Carousel**

---

## 💡 Próximos Passos

- Adicionar integração com banco de dados para carregar imóveis dinamicamente.
- Implementar filtros interativos para busca de imóveis no mapa.
- Melhorar o design responsivo.

---

## 📝 Autor

**Jhonne Amorim**

- GitHub: https://github.com/JhonneAmorim
- LinkedIn: https://www.linkedin.com/in/jhonne-amorim-oliveira-b8b95a243/
